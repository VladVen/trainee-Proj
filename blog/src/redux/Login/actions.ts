import {CATCH_ERROR, CLEAR_ERROR, LOG_OUT, SET_AUTH} from "./actionTypes";
import {AuthDataType} from "./reducer";


export const actions = {
    setAuth: (authData: AuthDataType) => ({
        type: SET_AUTH,
        payload: {authData}
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
}