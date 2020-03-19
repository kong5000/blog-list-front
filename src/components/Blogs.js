import React from 'react'
import { connect } from 'react-redux'
import { Table } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { updateBlog } from '../reducers/blogReducer'
import BlogForm from './BlogForm'
import { logout } from '../reducers/userReducer'
import Row from './Row'

const Blogs = (props => {
    const handleLogout = () => {
        window.localStorage.removeItem('loggedInUser')
        props.logout()
    }

    const sortBlogs = (blogs) => {
        return (blogs.sort(function (a, b) {
            if (a.likes > b.likes) {
                return -1;
            } else if (a.likes < b.likes) {
                return 1;
            }
            return 0;
        }))
    }

    return (
        <div class="blog-page">
            <div class="blog-page-header">
                <h1 class="blog-page-header-text">PostAp</h1>
                <div className="btn-container">
                <Button className="logout-btn" variant="primary" onClick={handleLogout}>
                    Logout
                </Button>
                <BlogForm />
                </div>
            </div>
            <Table striped>
                <tbody>
                    {sortBlogs(props.blogs).map((blog, index) =>
                        <Row blog={blog} index={index} blogs={props.blogs}/>
                    )}
                </tbody>
            </Table>
        </div>
    )
})

const mapDispatchToProps = {
    updateBlog,
    logout
}

const mapStateToProps = (state) => {
    return {
        blogs: state.blogs
    }
}

const ConnectedBlogs = connect(mapStateToProps, mapDispatchToProps)(Blogs)
export default ConnectedBlogs