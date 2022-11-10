import { instance } from '../api';
import { addPostValuesType, commonAddPostType } from '../../redux/CommonDataTypes/types';

export const postsAPI = {
  getPosts(startValue: number, id = '') {
    return instance.get(`posts?postedBy=${id}&skip=${startValue}`).then((response) => response.data);
  },
  addPost(post: commonAddPostType) {
    return instance.post(`posts`, { ...post }).then((response) => response.data);
  },
  editPost(post: addPostValuesType, id: string) {
    return instance.patch(`posts/${id}`, { ...post }).then((response) => response.data);
  },
  addPhoto(img: File, id: string) {
    const formData = new FormData();
    formData.append('image', img);
    return instance
      .put(`posts/upload/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => response.data);
  },
  addLike(id: string) {
    return instance.put(`posts/like/${id}`).then((response) => response.data);
  },
  addCommentLike(id: string) {
    return instance.put(`comments/like/${id}`).then((response) => response.data);
  },
  getCurrentPost(id: string) {
    return instance.get(`posts/${id}`).then((response) => response.data);
  },
  getCurrentComments(id: string) {
    return instance.get(`comments/post/${id}`).then((response) => response.data);
  },
  setNewComment(id: string, message: string, followedId: string | null) {
    return instance
      .post(`comments/post/${id}`, { text: message, followedCommentID: followedId })
      .then((response) => response.data);
  },
  deletePost(postId: string) {
    return instance.delete(`posts/${postId}`).then((response) => response.data);
  },
};
