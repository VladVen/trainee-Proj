import {InferActionType} from "../store";
import {CATCH_ERROR, CLEAR_ERROR, LOG_OUT, SET_AUTH} from "./actionTypes";
import {actions} from "./actions";


export type AuthDataType = {
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

type LoginData = {
    email: string
    password: string
}

const initialState = {
    authData: null as AuthDataType | null,
    token: null as string | null,
    error: null as string | null,
    loginData: null as LoginData | null,
}

type initialStateType = typeof initialState

export type ActionsType = InferActionType<typeof actions>


export const authReducer = (state = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case SET_AUTH:
            return {
                ...state,
                authData: action.payload.authData,
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






