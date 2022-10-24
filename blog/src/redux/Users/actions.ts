import {usersResponseType} from "../CommonDataTypes/types";
import {GET_USERS} from "./actionTypes";


export const actions = {
    getUsers : (users: usersResponseType) => ({
        type: GET_USERS,
        payload: {users}
    } as const),

}