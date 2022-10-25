import {instance} from "../api";

export const postsAPI = {
    getPosts( startValue: number, id = '') {
        return instance.get(`posts?postedBy=${id}&skip=${startValue}`)
            .then(response => response.data)
    },
    getPostImage( posterId: string, postId: string) {
        return instance.get(`users/${posterId}/${postId}`)
            .then(response => response.data)
    },
    addLike(id: string) {
        return instance.put(`posts/like/${id}`)
            .then(response => response.data)
    },
}



