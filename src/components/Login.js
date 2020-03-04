import React from 'react'

const Login = ({handleLogin, username, onUsernameChange, password, onPasswordChange}) => {
    return(
        <form onSubmit={handleLogin}>
            <div>
                Username
                <input
                type="text"
                value={username}
                name="Username"
                onChange={(event) => onUsernameChange(event)}
                ></input>
            </div>
            <div>
                Password
                <input
                type="password"
                value={password}
                name="Password"
                onChange={(event) => onPasswordChange(event)}
                ></input>
            </div>
            <button type ="submit">login</button>
        </form>
    )
}


export default Login