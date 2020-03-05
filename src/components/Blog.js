import React from 'react'

const Blog = ({ blog }) => {
    if (blog === undefined) {
        return null
    }
    return (
        <div>
            <h2>{blog.title}</h2>
            <div>Likes {blog.likes}</div>
            <div>Posted By {blog.user.username}</div>
            <ul>
                {blog.comments.map(comment =>
                    <li>{comment}</li>)}
            </ul>
        </div>
    )
}
export default Blog