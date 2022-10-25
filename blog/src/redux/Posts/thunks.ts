import {CommonThunkType} from "../store";
import {postsActions} from "./actions";
import {ActionsType} from "./reducer";
import {postsAPI} from "../../API/postsAPI/postsAPI";


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




