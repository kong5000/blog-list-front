import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Users = ({ users }) => {

    return (
        <div>
            <h2>Users</h2>
            {users.map(user => {
                return (
                    <div key={user.id}>
                        <Link to={`/api/users/${user.id}`}>{user.name}</Link>
                         {user.blogs.length}
                    </div>
                )
            })}
        </div>
    )
}

export default Users