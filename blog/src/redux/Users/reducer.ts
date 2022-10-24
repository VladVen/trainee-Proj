import {InferActionType} from "../store";
import {actions} from "./actions";
import {commonUserType} from "../CommonDataTypes/types";
import {GET_USERS} from "./actionTypes";

const initialState = {
    users: {
        pagination: {
            skip: null as number | null,
            limit: null as number | null,
            total: null as number | null,
        },
        data: [] as commonUserType[]
    }
}

type initialStateType = typeof initialState

export type ActionsType = InferActionType<typeof actions>


export const usersReducer = (state = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                users: {
                    ...state.users,
                    pagination: {
                        ...state.users.pagination,
                        skip: action.payload.users.pagination.skip,
                        limit: action.payload.users.pagination.limit,
                        total: action.payload.users.pagination.total,
                    },
                    data: [...state.users.data, ...action.payload.users.data]
                },
            }
        default:
            return state
    }

}






