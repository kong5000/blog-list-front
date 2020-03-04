import React from 'react'
import { connect } from 'react-redux'

const Blogs = (({blogs}) => {

    return(
        <ul>
            {blogs.map(blog => <li key={blog._id}>{blog.title} {blog.author}</li>)}
        </ul>
    )
})

const mapStateToProps = (state) => {
    return{
        blogs: state
    }
}

const ConnectedBlogs = connect(mapStateToProps)(Blogs)
export default ConnectedBlogs