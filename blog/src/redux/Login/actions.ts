import {CATCH_ERROR, CLEAR_ERROR, LOG_OUT, SET_AUTH, SET_LOGIN_DATA, SET_TOKEN} from "./actionTypes";
import {AuthDataType} from "./reducer";


export const actions = {
    setAuth: (authData: AuthDataType) => ({
        type: SET_AUTH,
        payload: {authData}
    } as const),
    logIn: (token: string) => ({
        type: SET_TOKEN,
        payload: {token}
    } as const),
    catchError: (error: string) => ({
        type: CATCH_ERROR,
        payload: {error}
    } as const),
    clearError: () => ({
        type: CLEAR_ERROR,
    } as const),
    logout: () => ({
        type: LOG_OUT,
    } as const),
    setLoginData: (email: string, password: string) => ({
        type: SET_LOGIN_DATA,
        payload: {email, password}
    } as const),
}