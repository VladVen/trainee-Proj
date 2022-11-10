import { CommonThunkType } from '../store';
import { postsActions } from './actions';
import { ActionsType } from './reducer';
import { postsAPI } from '../../API/postsAPI/postsAPI';
import { addPostValuesType, commonAddPostType } from '../CommonDataTypes/types';

export type ThunkType = CommonThunkType<ActionsType>;

export const getPosts =
  (startValue: number, id = '', search = ''): ThunkType =>
  async (dispatch) => {
    try {
      let posts = await postsAPI.getPosts(startValue, id, search);
      dispatch(postsActions.setPosts(posts));
    } catch (e) {
      console.log(e);
    }
  };

export const addLike =
  (id: string): ThunkType =>
  async (dispatch, getState) => {
    const myId = getState().auth.authData?._id as string;
    try {
      await postsAPI.addLike(id);
      dispatch(postsActions.addLike(id, myId));
    } catch (e) {
      console.log(e);
    }
  };
export const addCommentLike =
  (id: string): ThunkType =>
  async () => {
    try {
      await postsAPI.addCommentLike(id);
    } catch (e) {
      console.log(e);
    }
  };

export const addPost =
  (post: commonAddPostType): ThunkType =>
  async (dispatch) => {
    try {
      const newPost = await postsAPI.addPost(post);
      dispatch(postsActions.saveNewPost(newPost));
    } catch (e) {
      console.log(e);
    }
  };

export const addPhoto =
  (img: File, id: string): ThunkType =>
  async (dispatch) => {
    try {
      const updatedPost = await postsAPI.addPhoto(img, id);
      dispatch(postsActions.addPhoto(updatedPost));
    } catch (e) {
      console.log(e);
    } finally {
      dispatch(postsActions.clearNewPost());
    }
  };
export const editPost =
  (values: addPostValuesType, id: string): ThunkType =>
  async (dispatch) => {
    try {
      const updatedPost = await postsAPI.editPost(values, id);
      dispatch(postsActions.editPost(updatedPost));
      dispatch(postsActions.setCurrentPost(updatedPost));
    } catch (e) {
      console.log(e);
    } finally {
      dispatch(postsActions.clearNewPost());
    }
  };
export const getCurrentPost =
  (id: string): ThunkType =>
  async (dispatch) => {
    try {
      const post = await postsAPI.getCurrentPost(id);
      dispatch(postsActions.setCurrentPost(post));
    } catch (e) {
      console.log(e);
    }
  };

export const getCurrentComments =
  (id: string): ThunkType =>
  async (dispatch) => {
    try {
      const comments = await postsAPI.getCurrentComments(id);
      dispatch(postsActions.setCurrentComments(comments));
    } catch (e) {
      console.log(e);
    }
  };

export const addNewComment =
  (id: string, message: string, followedId: string | null): ThunkType =>
  async (dispatch) => {
    try {
      const comment = await postsAPI.setNewComment(id, message, followedId);
      dispatch(postsActions.addNewComment(comment));
    } catch (e) {
      console.log(e);
    }
  };

export const deletePost =
  (postId: string): ThunkType =>
  async (dispatch, getState) => {
    const myId = getState().auth.authData?._id;
    try {
      await postsAPI.deletePost(postId);
      dispatch(postsActions.clearPosts());
      await dispatch(getPosts(0, myId));
    } catch (e) {
      console.log(e);
    }
  };
