import {instance} from "./api";

export type createAccountType = {
    email: string,
    password: string,
    name: string,
    extra_details: string,
    skills: string,
    profession: string,
    details: string
}



export const authAPI = {
    logIn(email: string, password: string) {
        return instance.post('auth', {email, password})
            .then(response => response.data.token)
    },

    createAccount(values: createAccountType) {
        return instance.post(`/users`, {...values})
            .then(response => response.data)
    },
    getProfile(token: string) {
        return instance.get(`auth/user`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => response.data)
    },
}