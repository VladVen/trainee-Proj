import {instance} from "../api";



export const usersAPI = {
    getUsers(startValue: number) {
        return instance.get(`users?limit=10&skip=${startValue}`)
            .then(response => response.data)
    },
}



