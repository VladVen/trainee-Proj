import {LOG_OUT, SET_MY_POSTS} from "./actionTypes";


export const postsActions = {
    setMyPosts: (posts: any) => ({
        type: SET_MY_POSTS,
        payload: {posts}
    } as const),
    logout: () => ({
        type: LOG_OUT,
    } as const),
}