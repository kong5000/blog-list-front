import React, { useEffect } from 'react';
import './App.css';
import Login from './components/Login'
import Blogs from './components/Blogs'
import BlogForm from './components/BlogForm'
import Togglable from './components/Togglable'
import { initializeBlogs } from './reducers/blogReducer'
import { connect } from 'react-redux'
import { setUser, logout } from './reducers/userReducer'

const App = (props) => {

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
  })

  return (
    <div>
      {props.user === null && <Login/>}
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
  initializeBlogs,
  setUser,
  logout
}


const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)
export default ConnectedApp;
