import React from 'react'
import Button from 'react-bootstrap/Button'
import Link from 'react-router-dom/Link'
import { connect } from 'react-redux'
import { updateBlog } from '../reducers/blogReducer'


const Row = (props) => {
    const index = props.index;
    const blog = props.blog;
    const blogs = props.blogs;

    const styleRow = (index) => {
        return (index % 2 === 0 ? 'row-light' : 'row-dark');
    }
    const styleContent = (index) => {
        return (index % 2 === 0 ? 'content-dark' : 'content-light');
    }

    const upVote = (id) => {
        return (() => {
            const votedBlog = blogs.find(blog => blog._id === id)
            const updatedBlog = { ...votedBlog, likes: votedBlog.likes + 1 };
            props.updateBlog(updatedBlog)
        })
    }
    const downVote = (id) => {
        return (() => {
            const votedBlog = blogs.find(blog => blog._id === id)
            const updatedBlog = { ...votedBlog, likes: votedBlog.likes - 1 };
            props.updateBlog(updatedBlog)
        })
    }
    return (
        <tr key={blog._id} id={styleRow(index)}>
            <td className="table-data">
                <div className="likes-counter">{blog.likes}</div>
                <Button className="upvote-btn" onClick={downVote(blog._id)}>
                    <i class="fas fa-arrow-down"></i>
                </Button>
                <Button className="downvote-btn" onClick={upVote(blog._id)}>
                    <i class="fas fa-arrow-up"></i>
                </Button>

                <Link to={`/blogs/${blog._id}`} id={styleContent(index)}>{blog.title}</Link>
                <div className="date">Posted on {blog.date.substring(0, 24)} by {blog.author}</div>
            </td>
        </tr>
    )
}

const mapDispatchToProps = {
    updateBlog
}


const ConnectedRow = connect(null, mapDispatchToProps)(Row)
export default ConnectedRow