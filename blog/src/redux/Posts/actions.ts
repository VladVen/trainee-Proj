import {
  ADD_LIKE,
  ADD_NEW_COMMENT,
  CLEAR_CURRENT_POST,
  CLEAR_NEW_POST,
  CLEAR_POSTS,
  LOG_OUT,
  SAVE_NEW_POST,
  SET_CURRENT_COMMENTS,
  SET_CURRENT_POST,
  SET_POSTS,
} from './actionTypes';
import { commonCommentsType, commonPostType, postsResponseType } from '../CommonDataTypes/types';

export const postsActions = {
  setPosts: (posts: postsResponseType) =>
    ({
      type: SET_POSTS,
      payload: { posts },
    } as const),
  clearPosts: () =>
    ({
      type: CLEAR_POSTS,
    } as const),
  saveNewPost: (post: commonPostType) =>
    ({
      type: SAVE_NEW_POST,
      payload: { post },
    } as const),
  clearNewPost: () =>
    ({
      type: CLEAR_NEW_POST,
    } as const),
  setCurrentPost: (post: commonPostType) =>
    ({
      type: SET_CURRENT_POST,
      payload: { post },
    } as const),
  setCurrentComments: (comments: commonCommentsType[]) =>
    ({
      type: SET_CURRENT_COMMENTS,
      payload: { comments },
    } as const),
  clearCurrentPost: () =>
    ({
      type: CLEAR_CURRENT_POST,
    } as const),
  addNewComment: (comment: commonCommentsType) =>
    ({
      type: ADD_NEW_COMMENT,
      payload: { comment },
    } as const),
  addLike: (postId: string, myId: string) =>
    ({
      type: ADD_LIKE,
      payload: { postId, myId },
    } as const),
  logout: () =>
    ({
      type: LOG_OUT,
    } as const),
};
