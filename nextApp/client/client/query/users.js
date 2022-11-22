import {gql} from "@apollo/client";

export const GET_ALL_USERS = gql`
    query {
        getAllUsers {
            username,
            id
        }
    }
`
export const GET_USER = gql`
    query getUser($id: ID) {
        getUser(id: $id) {
            username, id,aboutMe, age
        }
    }
`