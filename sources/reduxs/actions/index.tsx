import {LOGIN, REGISTER} from './type';

export const login = (phone: string, password: string) => ({
    type: LOGIN,
    payload: {
        phone,
        password
    }
})

export const register = (username: string, phone: string, password: string) => ({
    type: REGISTER,
    payload: {
        username,
        phone,
        password
    }
})