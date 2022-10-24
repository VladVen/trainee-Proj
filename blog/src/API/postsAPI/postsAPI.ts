import {instance} from "../api";

export const postsAPI = {
    getPosts(id: string) {
        return instance.get(`posts?postedBy=${id}`)
            .then(response => response.data)
    },
    addLike(id: string) {
        return instance.put(`posts/like/${id}`)
            .then(response => response.data)
    },
}



