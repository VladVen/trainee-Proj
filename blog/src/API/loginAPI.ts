import {instance} from "./api";




export const authAPI = {
    logIn(email: string, password: string) {
        return instance.post('auth', {email, password})
            .then(response => response.data)
    },
    getProfile(token: string) {
        return instance.get(`auth/user${token}`)
            .then(response => response.data)
    },
}