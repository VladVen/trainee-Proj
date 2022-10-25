import {instance} from "../api";

export const postsAPI = {
    getPosts(id: string, startValue: number) {
        return instance.get(`posts?postedBy=${id}&skip=${startValue}`)
            .then(response => response.data)
    },
    addLike(id: string) {
        return instance.put(`posts/like/${id}`)
            .then(response => response.data)
    },
}



