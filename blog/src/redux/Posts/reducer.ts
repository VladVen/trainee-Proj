import {InferActionType} from "../store";
import {postsActions} from "./actions";
import {commonPostType} from "../CommonDataTypes/types";
import {CLEAR_NEW_POST, CLEAR_POSTS, LOG_OUT, SAVE_NEW_POST, SET_POSTS} from "./actionTypes";

const initialState = {
    posts: {
        pagination: {
            skip: null as number | null,
            limit: null as number | null,
            total: null as number | null,
        },
        data: [] as commonPostType[]
    },
    newPost: null as commonPostType | null
}

type initialStateType = typeof initialState

export type ActionsType = InferActionType<typeof postsActions>


export const postReducer = (state = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case SET_POSTS:
            return {
                ...state,
                posts: {
                    ...state.posts,
                    pagination: {
                        ...state.posts.pagination,
                        skip: action.payload.posts.pagination.skip,
                        limit: action.payload.posts.pagination.limit,
                        total: action.payload.posts.pagination.total,
                    },
                    data: [...state.posts.data, ...action.payload.posts.data]
                },
            }
        case SAVE_NEW_POST:
            return {
                ...state,
                newPost: action.payload.post
            }
        case CLEAR_NEW_POST:
            return {
                ...state,
                newPost: null
            }
        case LOG_OUT:
        case CLEAR_POSTS:
            return {
                ...state,
                posts: {
                    ...state.posts,
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






