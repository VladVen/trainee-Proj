import {loginAPI, createAccountType} from "../../API/loginAPI";
import {CommonThunkType} from "../store";
import {actions} from "./actions";
import {ActionsType} from "./reducer";


export type ThunkType = CommonThunkType<ActionsType>


export const getProfile = (): ThunkType => async (dispatch) => {
    try {
        let data = await loginAPI.getProfile()
        dispatch(actions.setAuth(data))
    } catch (e) {
        console.log(e)
    }
}

export const setLogIn = (email: string, password: string): ThunkType => async (dispatch) => {
    try {
        dispatch(actions.clearError())
        await loginAPI.logIn(email, password)
        await dispatch(getProfile())
    } catch (e: any) {
        let error = Array.isArray(e.response.data.error) ? e.response.data.error[0].message : e.response.data.error
        console.log(error)
        dispatch(actions.catchError(error))
    }
}

export const setRegister = (values: createAccountType): ThunkType => async (dispatch) => {
    try {
        dispatch(actions.clearError())
        await loginAPI.createAccount(values)
        await dispatch(setLogIn(values.email, values.password))
    } catch (e:any) {
        let error = Array.isArray(e.response.data.error) ? e.response.data.error[0].message : e.response.data.error
        dispatch(actions.catchError(error))
    }
}



