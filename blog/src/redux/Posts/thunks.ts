import {CommonThunkType} from "../store";
import {postsActions} from "./actions";
import {ActionsType} from "./reducer";
import {postsAPI} from "../../API/postsAPI/postsAPI";
import {commonAddPostType} from "../CommonDataTypes/types";


export type ThunkType = CommonThunkType<ActionsType>


export const getPosts = (startValue: number, id = ''): ThunkType => async (dispatch) => {
    try {
        let posts = await postsAPI.getPosts(startValue, id)
        dispatch(postsActions.setPosts(posts))
    } catch (e) {
        console.log(e)
    }
}

export const addLike = (id: string): ThunkType => async () => {
    try {
        await postsAPI.addLike(id)
    } catch (e) {
        console.log(e)
    }
}

export const addPost = (post: commonAddPostType): ThunkType => async (dispatch) => {
    try {
       const newPost = await postsAPI.addPost(post)
        dispatch(postsActions.saveNewPost(newPost))
    } catch (e) {
        console.log(e)
    }
}
export const addPhoto = (img: File, id: string): ThunkType => async (dispatch) => {
    try {
        await postsAPI.addPhoto(img, id )
    } catch (e) {
        console.log(e)
    } finally {
        dispatch(postsActions.clearNewPost())
    }
}
export const getCurrentPost = (id: string): ThunkType => async (dispatch) => {
    try {
       const post = await postsAPI.getCurrentPost(id)
        dispatch(postsActions.setCurrentPost(post))
    } catch (e) {
        console.log(e)
    }
}

export const getCurrentComments = (id: string): ThunkType => async (dispatch) => {
    try {
        const comments = await postsAPI.getCurrentComments(id)
        dispatch(postsActions.setCurrentComments(comments))
    } catch (e) {
        console.log(e)
    }
}



