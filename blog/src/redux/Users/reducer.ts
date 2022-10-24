import {InferActionType} from "../store";
import {actions} from "./actions";
import {commonUserType} from "../CommonDataTypes/types";
import {GET_USERS} from "./actionTypes";

const initialState = {
    users: [] as commonUserType[]

}

type initialStateType = typeof initialState

export type ActionsType = InferActionType<typeof actions>


export const usersReducer = (state = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.payload.users],
            }
        default:
            return state
    }

}






