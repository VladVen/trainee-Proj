import axios from "axios";

export const instance = axios.create({
    baseURL: 'http://test-blog-api.ficuslife.com/api/v1/',
    headers: {
        "Content-Type": "application/json"
    }
})


