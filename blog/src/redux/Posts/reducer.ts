import {InferActionType} from "../store";
import {actions} from "./actions";
import {commonPostType} from "../CommonDataTypes/types";
import {SET_MY_POSTS} from "./actionTypes";

const initialState = {
    myPosts: {
        pagination: {
            skip: null as number | null,
            limit: null as number | null,
            total: null as number | null,
        },
        data: [] as commonPostType[]
    }
}

type initialStateType = typeof initialState

export type ActionsType = InferActionType<typeof actions>


export const postReducer = (state = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case SET_MY_POSTS:
            return {
                ...state,
                myPosts: {
                    ...state.myPosts,
                    pagination: {
                        ...state.myPosts.pagination,
                        skip: action.payload.posts.pagination.skip,
                        limit: action.payload.posts.pagination.limit,
                        total: action.payload.posts.pagination.total,
                    },
                    data: [...state.myPosts.data, ...action.payload.posts.data]
                },
            }
        default:
            return state
    }

}






