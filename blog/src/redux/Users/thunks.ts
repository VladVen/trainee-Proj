import {CommonThunkType} from "../store";
import {actions} from "./actions";
import {ActionsType} from "./reducer";
import {usersAPI} from "../../API/usersAPI/usersAPI";


export type ThunkType = CommonThunkType<ActionsType>


export const getUsers = (startValue: number): ThunkType => async (dispatch) => {
    try {
        let users = await usersAPI.getUsers(startValue)
        dispatch(actions.getUsers(users))
    } catch (e) {
        console.log(e)
    }
}




