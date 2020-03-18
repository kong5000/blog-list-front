import React, { useState } from 'react'
import { login, createUser } from '../reducers/userReducer'
import { connect } from 'react-redux'
import { Form, Button } from 'react-bootstrap'

const Login = (props) => {
    const [usernameNotification, setUsernameNotification] = useState(false)
    const [passwordNotification, setPasswordNotification] = useState(false)

    const handleLogin = (event) => {
        event.preventDefault()
        const usernameLogin = event.target.username.value
        const passwordLogin = event.target.password.value
        props.login(usernameLogin, passwordLogin)
    }
    const handleSignUp = (event) => {
        let error = false;
        event.preventDefault()
        const usernameSignUp = event.target.usernameSignUp.value
        const passwordSignUp = event.target.passwordSignUp.value
        if(usernameSignUp.length < 3){
            error = true;
            usernameError()
        }
        if(passwordSignUp.length < 3){
            error = true;
        }
        if(!error){
            props.createUser(usernameSignUp, passwordSignUp)
        }
    }

    const usernameError = () =>{
        setUsernameNotification(true);
        setTimeout(() => {
            setUsernameNotification(false);
          }, 3000);
    }


    return (
        <div id="login">
            {usernameNotification && <div class="signup-error">Username and password must be greater than 3 characters</div>}
            <h2>SignUp</h2>
            <Form onSubmit={handleSignUp}>
                <Form.Group>
                    <Form.Label>username</Form.Label>
                    <Form.Control
                        type="text"
                        name="usernameSignUp"
                    />
                    <Form.Label>password</Form.Label>
                    <Form.Control
                        type="password"
                        name="passwordSignUp"
                    />
                    <Button className="form-button" variant="primary" type="submit">
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
                    <Button className="form-button" variant="primary" type="submit">
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
    login,
    createUser
}

const ConnectedLogin = connect(null, mapDispatchToProps)(Login)
export default ConnectedLogin