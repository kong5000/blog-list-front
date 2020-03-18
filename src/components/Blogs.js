import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Table } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'

const Blogs = (({ blogs }) => {

    return (
        <div class="blog-page">
            <div class="blog-page-header">
                <h1 class="blog-page-header-text">PostAp</h1>
                <Button className="new-post-btn">New Post</Button>
            </div>
            <Table striped>
                <tbody>
                    {blogs.map(blog =>
                        <tr key={blog._id}>
                            <td>
                                <Link to={`/blogs/${blog._id}`}>{blog.title}</Link>
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
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