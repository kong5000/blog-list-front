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
  const [errorMessage, setErrorMessage] = useState(null)

  /*Using custom hooks so this file doesn't need to take care of 
    username and password states and their respective on change handlers
  */
  const username = useField('text')
  const password = useField('password')

  const title = useField('text')
  const author = useField('text')

  const handleLogout = () => {
    window.localStorage.removeItem('loggedInUser')
    //logout props
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
    const loggedInUserJSON = window.localStorage.getItem('loggedInUser')
    if (loggedInUserJSON) {
      const user = JSON.parse(loggedInUserJSON)
      //Todo props.setUser here

      blogsService.setToken(user.token)
      console.log('setting initial token', user.token)
    }

  }, [])

  useEffect(() => {
    props.initializeBlogs()
  })


  return (
    <div>
      {props.user === null &&
        <Login
          handleLogin={handleLogin}
          username={username.value}
          onUsernameChange={username.onChange}
          password={password.value}
          onPasswordChange={password.onChange}>
        </Login>
      }
      {props.user !== null &&
        <div>
          <Togglable buttonLabel="new note">
            <BlogForm />
          </Togglable>
          <Blogs></Blogs>
          <button onClick={handleLogout}>logout</button>
        </div>
      }
    </div>
  );
}

const mapDispatchToProps = {
  initializeBlogs
}


const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)
export default ConnectedApp;
