import {buildSchema} from "graphql";

const schema = buildSchema(`
        type User  {
            id: ID
            username: String
            age: Int
            aboutMe: String
            }

        input UserInput {
            id: ID
            username: String!
            age: Int!
            aboutMe: String!
        }

        type Query {
            getAllUsers: [User]
            getUser(id: ID): User
        }
        
        type Mutation {
            createUser(input: UserInput): User
        }
`)

export default schema
