import {instance} from "../api";
import {commonAddPostType} from "../../redux/CommonDataTypes/types";

export const postsAPI = {
    getPosts( startValue: number, id = '') {
        return instance.get(`posts?postedBy=${id}&skip=${startValue}`)
            .then(response => response.data)
    },
    addPost( post: commonAddPostType) {
        return instance.post(`posts`, {...post})
            .then(response => response.data)
    },
    addPhoto( img: File, id: string) {
        const formData = new FormData()
        formData.append('image', img)
        return instance.put(`posts/upload/${id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },

    addLike(id: string) {
        return instance.put(`posts/like/${id}`)
            .then(response => response.data)
    },
}



