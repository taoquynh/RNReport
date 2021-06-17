import { User } from '../../models/User';
import {GET_USER, LOGIN, LOGIN_FALSE, REGISTER} from './type';

export const loginAction = (phone: string, password: string) => ({
    type: LOGIN,
    payload: {
        phone,
        password
    }
})

// export const loginFalse = (error: string) => ({
//     type: LOGIN_FALSE,
//     payload: error
// })

export const register = (username: string, phone: string, password: string) => ({
    type: REGISTER,
    payload: {
        username,
        phone,
        password
    }
})

export const getProfile = (user: User) => ({
    type: GET_USER,
    payload: user,
})