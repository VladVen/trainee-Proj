import express from 'express'
import cors from 'cors'
import {graphqlHTTP} from "express-graphql";
import {root} from "./root/root.js";
import schema from "./Schemas/Schema.js";


const PORT = 5000

const app = express()

app.use(cors())
app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema,
    rootValue: root
}))

app.listen(PORT, () => console.log('server started'))


