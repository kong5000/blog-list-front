import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './components/Login'
import Blogs from './components/Blogs'
import BlogForm from './components/BlogForm'
import Togglable from './components/Togglable'
import blogsService from './services/blogs'
import loginService from './services/login'
import { useField } from './hooks'
import { initializeBlogs } from './reducers/blogReducer'
import { connect } from 'react-redux'


const App = (props) => {

  const [blogs, setBlogs] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)
  const [user, setUser] = useState(null)


  /*Using custom hooks so this file doesn't need to take care of 
    username and password states and their respective on change handlers
  */
  const username = useField('text')
  const password = useField('password')

  const title = useField('text')
  const author = useField('text')

  const handleLogout = () => {
    window.localStorage.removeItem('loggedInUser')
    setUser(null)
  }


  const createBlog = async (event) => {
    event.preventDefault()
    const newBlog = {
      title: title.value,
      author: author.value,
      url: 'www.someurl.com',
      likes: 0,
      user: user._id
    }
    const postedBlog = await blogsService.createBlog(newBlog)
    setBlogs(blogs.concat(postedBlog))
    title.clear()
    author.clear()
  }

  const handleLogin = async (event) => {
    event.preventDefault()

    try {
      const user = await loginService.login({
        username: username.value,
        password: password.value
      })

      window.localStorage.setItem(
        'loggedInUser', JSON.stringify(user)
      )
      blogsService.setToken(user.token)
      setUser(user)
      username.clear()
      password.clear()
    } catch (exception) {
      setErrorMessage('Wrong login credentials')
      setTimeout(() => {
        setErrorMessage(null)
      }, 3000)
    }

  }

  useEffect(() => {
    blogsService
      .getAll()
      .then(initialBlogs => setBlogs(initialBlogs))
  }, [])

  useEffect(() => {
    const loggedInUserJSON = window.localStorage.getItem('loggedInUser')
    if (loggedInUserJSON) {
      const user = JSON.parse(loggedInUserJSON)
      setUser(user)
      blogsService.setToken(user.token)
      console.log('setting initial token', user.token)
    }

  }, [])

  useEffect(() => {
    props.initializeBlogs()
  })


  return (
    <div>
      {user === null &&
        <Login
          handleLogin={handleLogin}
          username={username.value}
          onUsernameChange={username.onChange}
          password={password.value}
          onPasswordChange={password.onChange}>
        </Login>
      }
      {user !== null &&
        <div>
          <Togglable buttonLabel="new note">
            <BlogForm
              title={title.value}
              author={author.value}
              onTitleChange={title.onChange}
              onAuthorChange={author.onChange}
              onSubmit={createBlog}
            ></BlogForm>
          </Togglable>
          <Blogs blogs={blogs}></Blogs>
          <button onClick={handleLogout}>logout</button>
        </div>
      }
    </div>
  );
}

const mapDispatchToProps = {
  initializeBlogs
}

const ConnectedApp = connect(null, mapDispatchToProps)(App)
export default ConnectedApp;
