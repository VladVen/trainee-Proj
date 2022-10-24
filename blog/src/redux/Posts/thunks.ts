import {CommonThunkType} from "../store";
import {actions} from "./actions";
import {ActionsType} from "./reducer";
import {postsAPI} from "../../API/postsAPI/postsAPI";


export type ThunkType = CommonThunkType<ActionsType>


export const getMyPosts = (): ThunkType => async (dispatch, getState) => {
    const id = getState().auth.authData?._id
    try {
        let posts = await postsAPI.getPosts(id as string)
        dispatch(actions.setMyPosts(posts.data))
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




