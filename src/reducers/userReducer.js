import loginService from '../services/login'

export const login = (username, password) => {
    console.log(username, password)
    return async dispatch => {
        try {
            const user = await loginService.login({
                username,
                password
            })

            window.localStorage.setItem(
                'loggedInUser', JSON.stringify(user)
            )

            dispatch({
                type: 'LOGIN',
                user
            })
        } catch (exception) {
            console.log(exception)
        }

    }
}

const userReducer = (state = null, action) => {
    switch (action.type) {
        case 'LOGIN':
            return action.user
        default:
    }
    return state
}

export default userReducer