import React from 'react'
import { login } from '../reducers/userReducer'
import { connect } from 'react-redux'
import { Form, Button } from 'react-bootstrap'

const Login = (props) => {
    const handleLogin = (event) => {
        event.preventDefault()
        const usernameLogin = event.target.username.value
        const passwordLogin = event.target.password.value
        props.login(usernameLogin, passwordLogin)
    }
    const handleSignUp = (event) => {
        event.preventDefault()
        const usernameSignUp = event.target.username.value
        const passwordSignUp = event.target.password.value
    }
    return (
        <div id="login">
            <h2>SignUp</h2>
            <Form onSubmit={handleSignUp}>
                <Form.Group>
                    <Form.Label>username</Form.Label>
                    <Form.Control
                        type="text"
                        name="username"
                    />
                    <Form.Label>password</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                    />
                    <Button variant="primary" type="submit">
                        sign up
                    </Button>
                </Form.Group>
            </Form>
            <h2>Login</h2>
            <Form onSubmit={handleLogin}>
                <Form.Group>
                    <Form.Label>username</Form.Label>
                    <Form.Control
                        type="text"
                        name="username"
                    />
                    <Form.Label>password</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                    />
                    <Button variant="primary" type="submit">
                        login
                    </Button>
                </Form.Group>
            </Form>
        </div>
    )

    // return(
    //     <form onSubmit={handleLogin}>
    //         <div>
    //             Username
    //             <input
    //             type="text"
    //             name="username"
    //             ></input>
    //         </div>
    //         <div>
    //             Password
    //             <input
    //             type="password"
    //             name="password"
    //             ></input>
    //         </div>
    //         <button type ="submit">login</button>
    //     </form>
    // )
}

const mapDispatchToProps = {
    login
}

const ConnectedLogin = connect(null, mapDispatchToProps)(Login)
export default ConnectedLogin