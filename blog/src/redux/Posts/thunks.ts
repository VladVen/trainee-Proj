import {CommonThunkType} from "../store";
import {actions} from "./actions";
import {ActionsType} from "./reducer";
import {postsAPI} from "../../API/postsAPI/postsAPI";


export type ThunkType = CommonThunkType<ActionsType>


export const getMyPosts = (startValue: number): ThunkType => async (dispatch, getState) => {
    const id = getState().auth.authData?._id
    try {
        let posts = await postsAPI.getPosts(id as string, startValue)
        dispatch(actions.setMyPosts(posts))
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




