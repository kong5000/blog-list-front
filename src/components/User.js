import React from 'react'

const User = ({ user }) => {
    if ( user === undefined) { 
        return null
      }
    return (
        <div>
            <h2>{user.name}</h2>
            <ul>
                {user.blogs.map(blog => (
                    <div>{blog.title}</div>
                ))}
            </ul>
        </div>
    )
}


export default User