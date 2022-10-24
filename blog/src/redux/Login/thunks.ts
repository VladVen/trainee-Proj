import {loginAPI} from "../../API/loginAPI/loginAPI";
import {CommonThunkType} from "../store";
import {actions} from "./actions";
import {ActionsType} from "./reducer";
import {createAccountType, updateAccountType} from "../CommonDataTypes/types";


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

export const deleteAccount = (): ThunkType => async (dispatch, getState) => {
    const id = getState().auth.authData?._id
    try {
        await loginAPI.deleteProfile(id as string)
        dispatch(actions.logout())
    } catch (e:any) {
        console.log(e)
    }
}

export const updateAccount = (values: updateAccountType): ThunkType => async (dispatch, getState) => {
    const id = getState().auth.authData?._id
    try {
       const newData = await loginAPI.updateProfile(values, id as string)
        dispatch(actions.setAuth(newData))
    } catch (e:any) {
        console.log(e)
    }
}



