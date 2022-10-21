import {commonUserType} from "../CommonDataTypes/types";
import {GET_USERS} from "./actionTypes";


export const actions = {
    getUsers : (users: commonUserType[]) => ({
        type: GET_USERS,
        payload: {users}
    } as const),

}