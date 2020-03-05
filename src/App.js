import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './components/Login'
import Blogs from './components/Blogs'
import BlogForm from './components/BlogForm'
import Togglable from './components/Togglable'
import { initializeBlogs } from './reducers/blogReducer'
import { connect } from 'react-redux'
import { setUser, logout } from './reducers/userReducer'
import Users from './components/Users'
import User from './components/User'
import Blog from './components/Blog'
import Menu from './components/Menu'
import usersService from './services/users'
import { BrowserRouter, Route } from 'react-router-dom'

const App = (props) => {

  const [users, setUsers] = useState([])

  useEffect(() => {
    usersService.getUsers().then(
      userList => setUsers(userList)
    )
  },[])

  const handleLogout = () => {
    window.localStorage.removeItem('loggedInUser')
    props.logout()
  }

  useEffect(() => {
    const loggedInUserJSON = window.localStorage.getItem('loggedInUser')
    if (loggedInUserJSON) {
      const user = JSON.parse(loggedInUserJSON)
      props.setUser(user)
    }
  }, [])

  useEffect(() => {
    props.initializeBlogs()
  },[])


  const userById = (id) => {
    return users.find(user => user.id === id)
  }

  const blogById = (id) => {
    return props.blogs.find(blog => blog._id === id)
  }

  return (
    <div>
      {props.user === null && <Login />}
      {props.user !== null &&
        <div>
          <Togglable buttonLabel="new note">
            <BlogForm />
          </Togglable>
          <BrowserRouter>
            <Menu/>
            <Route exact path="/api/users/:id" render={({ match }) =>
              <User user={userById(match.params.id)} />
            } />
            <Route exact path="/api/blogs/:id" render={({ match }) =>
              <Blog blog={blogById(match.params.id)}></Blog>
            } />
            <Route exact path="/api/blogs" render={() =>
            <Blogs></Blogs>}/>
            <Route exact path="/api/users" render={() =>
            <Users users={users}></Users>}/>
          </BrowserRouter>
          <button onClick={handleLogout}>logout</button>
        </div>
      }
    </div>
  );
}

const mapDispatchToProps = {
  initializeBlogs,
  setUser,
  logout
}


const mapStateToProps = (state) => {
  return {
    user: state.user,
    blogs: state.blogs
  }
}

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)
export default ConnectedApp;
