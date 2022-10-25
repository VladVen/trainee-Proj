import {CLEAR_POSTS, LOG_OUT, SET_POSTS} from "./actionTypes";
import {postsResponseType} from "../CommonDataTypes/types";


export const postsActions = {

    setPosts: (posts: postsResponseType) => ({
        type: SET_POSTS,
        payload: {posts}
    } as const),
    clearPosts: () => ({
        type: CLEAR_POSTS,
    } as const),
    logout: () => ({
        type: LOG_OUT,
    } as const),
}