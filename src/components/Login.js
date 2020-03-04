import React from 'react'
import { userReducer, login} from '../reducers/userReducer'
import { connect } from 'react-redux'

const Login = (props) => {
    const username = props.username
    const onUsernameChange = props.onUsernameChange
    const password = props.password
    const onPasswordChange = props.onPasswordChange
    
    const handleLogin = (event) => {
        event.preventDefault()
        const usernameLogin = event.target.username.value
        const passwordLogin = event.target.password.value
        props.login(usernameLogin, passwordLogin)
    }

    return(
        <form onSubmit={handleLogin}>
            <div>
                Username
                <input
                type="text"
                value={username}
                name="username"
                onChange={(event) => onUsernameChange(event)}
                ></input>
            </div>
            <div>
                Password
                <input
                type="password"
                value={password}
                name="password"
                onChange={(event) => onPasswordChange(event)}
                ></input>
            </div>
            <button type ="submit">login</button>
        </form>
    )
}

const mapDispatchToProps = {
    login
}

const ConnectedLogin = connect(null, mapDispatchToProps)(Login)
export default ConnectedLogin