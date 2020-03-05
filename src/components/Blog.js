import React from 'react'
import { connect } from 'react-redux'
import { postComment } from '../reducers/blogReducer'

const Blog = (props) => {
    const blog = props.blog
    const onSubmit = (event) => {
        event.preventDefault()
        props.postComment(blog._id, event.target.comment.value)
        event.target.comment.value = ''
    }
    if (blog === undefined) {
        return null
    }
    return (
        <div>
            <h2>{blog.title}</h2>
            <div>Likes {blog.likes}</div>
            <div>Posted By {blog.author}</div>
            <ul>
                {blog.comments.map(comment =>
                    <li>{comment}</li>)}
            </ul>
            <form onSubmit={onSubmit}>
                <input type="text" name="comment"></input>
                <button type="submit">add comment</button>
            </form>
        </div>
    )
}

const mapDispatchToProps = {
    postComment
}

const ConnectedBlog = connect(null, mapDispatchToProps)(Blog)
export default ConnectedBlog