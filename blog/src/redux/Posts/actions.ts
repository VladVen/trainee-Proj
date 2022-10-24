import {SET_MY_POSTS} from "./actionTypes";


export const actions = {
    setMyPosts: (posts: any) => ({
        type: SET_MY_POSTS,
        payload: {posts}
    } as const),
}