import loginService from '../services/login'
import blogsService from '../services/blogs'
import userService from '../services/users'

export const login = (username, password) => {
    return async dispatch => {
        try {
            const user = await loginService.login({
                username,
                password
            })

            window.localStorage.setItem(
                'loggedInUser', JSON.stringify(user)
            )

            blogsService.setToken(user.token)

            dispatch({
                type: 'LOGIN',
                user
            })
        } catch (exception) {
            console.log(exception)
        }

    }
}

export const setUser = (user) => {
    blogsService.setToken(user.token)
    return {
        type: 'SET_USER',
        user
    }
}

export const createUser = (username, password) => {
    return async dispatch => {

        try {
            const user = { username, password, name: username }
            const newUser = await userService.createUser(user)

            const newUserLoggedIn = await loginService.login({
                username,
                password
            })

            window.localStorage.setItem(
                'loggedInUser', JSON.stringify(newUserLoggedIn)
            )

            blogsService.setToken(newUserLoggedIn.token)

            dispatch({
                type: 'LOGIN',
                user: newUserLoggedIn
            })
        }
        catch(exception){
            console.log(exception)
        }
    }
}


export const logout = () => {
    return {
        type: 'LOGOUT'
    }
}

const userReducer = (state = null, action) => {
    switch (action.type) {
        case 'LOGIN':
            return action.user
        case 'SET_USER':
            return action.user
        case 'CREATE_USER':
            return action.user
        case 'LOGOUT':
            return null
        default:
    }
    return state
}

export default userReducer