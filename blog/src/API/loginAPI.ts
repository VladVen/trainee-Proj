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



export const loginAPI = {
    logIn(email: string, password: string) {
        return instance.post('auth', {email, password})
            .then(response => localStorage.setItem('token', response.data.token))
    },

    createAccount(values: createAccountType) {
        return instance.post(`/users`, {...values})
            .then(response => response.data)
    },
    getProfile() {
        return instance.get(`auth/user`)
            .then(response => response.data)
    },
}



