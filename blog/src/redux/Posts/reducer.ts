import {InferActionType} from "../store";
import {postsActions} from "./actions";
import {commonPostType} from "../CommonDataTypes/types";
import {LOG_OUT, SET_MY_POSTS} from "./actionTypes";

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

export type ActionsType = InferActionType<typeof postsActions>


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
        case LOG_OUT:
            return {
                ...state,
                myPosts: {
                    ...state.myPosts,
                    pagination: {
                        skip: null,
                        limit: null,
                        total: null,
                    },
                    data: []
                },
            }
        default:
            return state
    }

}






