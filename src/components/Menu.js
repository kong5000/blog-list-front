import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
    const padding = { padding: 5}
    return(
        <div>
            <Link to="/api/blogs" style={padding}>Blogs</Link>
            <Link to="/api/users" style={padding}>Users</Link>
        </div>
    )
}

export default Menu