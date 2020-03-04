import React from 'react'

const Blogs = (({blogs}) => {

    return(
        <ul>
            {blogs.map(blog => <li key={blog._id}>{blog.title} {blog.author}</li>)}
        </ul>
    )
})

export default Blogs