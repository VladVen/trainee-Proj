import {authAPI, createAccountType} from "../../API/loginAPI";
import {CommonThunkType} from "../store";
import {actions} from "./actions";
import {ActionsType} from "./reducer";


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
        let error = Array.isArray(e.response.data.error) ? e.response.data.error[0].message : e.response.data.error
        console.log(error)
        dispatch(actions.catchError(error))
    } finally {
        let token = getState().auth.token
        await dispatch(getProfile(token as string))
    }
}

export const setRegister = (values: createAccountType): ThunkType => async (dispatch) => {
    try {
        dispatch(actions.clearError())
        await authAPI.createAccount(values)
        await dispatch(setLogIn(values.email, values.password))
    } catch (e:any) {
        let error = Array.isArray(e.response.data.error) ? e.response.data.error[0].message : e.response.data.error
        dispatch(actions.catchError(error))
    }
}
