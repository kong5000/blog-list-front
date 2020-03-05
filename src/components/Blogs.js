import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Blogs = (({ blogs }) => {

    return (
        <div>
            {blogs.map(blog => {
                return (
                    <div>
                        <Link to={`/api/blogs/${blog._id}`}>{blog.title}</Link>
                    </div>
                )
            }

            )}
        </div>
    )
})

const mapStateToProps = (state) => {
    return {
        blogs: state.blogs
    }
}

const ConnectedBlogs = connect(mapStateToProps)(Blogs)
export default ConnectedBlogs