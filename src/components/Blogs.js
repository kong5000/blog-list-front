import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Table } from 'react-bootstrap'

const Blogs = (({ blogs }) => {

    return (
        <Table striped>
            <tbody>
                {blogs.map(blog =>
                    <tr key={blog._id}>
                        <td>
                            <Link to={`/api/blogs/${blog._id}`}>{blog.title}</Link>
                        </td>
                    </tr>
                )}
            </tbody>
        </Table>
    )
})

const mapStateToProps = (state) => {
    return {
        blogs: state.blogs
    }
}

const ConnectedBlogs = connect(mapStateToProps)(Blogs)
export default ConnectedBlogs