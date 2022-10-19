import {CommonThunkType, InferActionType} from "../store";
import {authAPI, createAccountType} from "../../API/loginAPI";

const SET_AUTH = 'auth/SET_AUTH'
const SET_TOKEN = 'auth/SET_TOKEN'
const CATCH_ERROR = 'auth/CATCH_ERROR'
const CLEAR_ERROR = 'auth/CLEAR_ERROR'
const LOG_OUT = 'auth/LOG_OUT'


type authDataType = {
    _id: string,
    email: string
    name: string
    avatar: string
    extra_details: string
    skills: string
    profession: string
    details: string
    dateCreated: string
}

const initialState = {
    authData: null as authDataType | null,
    token: null as string | null,
    error: null as string | null
}

type initialStateType = typeof initialState

const authReducer = (state = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case SET_AUTH:
            return {
                ...state,
                authData: action.payload.authData,
            }
        case SET_TOKEN:
            return {
                ...state,
                token: action.payload.token,
            }
        case CATCH_ERROR:
            return {
                ...state,
                error: action.payload.error,
            }
            case CLEAR_ERROR:
            return {
                ...state,
                error: null,
            }
        case LOG_OUT:
            return {
                ...state,
                authData: null,
                token: null,
                error: null
            }
        default:
            return state
    }

}

type ActionsType = InferActionType<typeof actions>


export const actions = {
    setAuth: (authData: authDataType) => ({
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
}

export type ThunkType = CommonThunkType<ActionsType>


export const getProfile = (token: string): ThunkType => async (dispatch) => {
    try {
        let data = await authAPI.getProfile(token)
        dispatch(actions.setAuth(data))
    } catch (e) {
        console.log(e)
    }
}

export const setLogIn = (email: string, password: string): ThunkType => async (dispatch, getState) => {
    try {
        dispatch(actions.clearError())
        let data = await authAPI.logIn(email, password)
        dispatch(actions.logIn(data))
    } catch (e: any) {
        dispatch(actions.catchError(e.response.data.error))
    } finally {
        let token = getState().auth.token
        await dispatch(getProfile(token as string))
    }
}
export const setRegister = (values: createAccountType): ThunkType => async (dispatch) => {
    try {
        dispatch(actions.clearError())
        await authAPI.createAccount(values)
    } catch (e:any) {
        dispatch(actions.catchError(e.response.data.error[0].message))
    }
}


export default authReducer