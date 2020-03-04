import React from 'react'
import { userReducer, login} from '../reducers/userReducer'
import { connect } from 'react-redux'

const Login = (props) => {
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
                name="username"
                ></input>
            </div>
            <div>
                Password
                <input
                type="password"
                name="password"
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