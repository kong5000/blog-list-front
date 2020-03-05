import React from 'react'

const Blog = ({ blog }) => {
    if (blog === undefined) {
        return null
    }
    return (
        <div>
            <h2>{blog.title}</h2>
            <div>Likes{blog.likes}</div>
            <div>Posted By{blog.user.name}</div>
        </div>
    )
}
export default Blog