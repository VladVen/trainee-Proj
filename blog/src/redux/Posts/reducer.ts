import {InferActionType} from "../store";
import {actions} from "./actions";
import {commonPostType} from "../CommonDataTypes/types";
import {SET_MY_POSTS} from "./actionTypes";

const initialState = {
    myPosts: [] as commonPostType[],
}

type initialStateType = typeof initialState

export type ActionsType = InferActionType<typeof actions>


export const postReducer = (state = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case SET_MY_POSTS:
            return {
                ...state,
                myPosts: [...state.myPosts, ...action.payload.posts],
            }
        default:
            return state
    }

}






