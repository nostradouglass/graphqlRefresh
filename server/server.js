
import cors from'cors'
import { graphqlHTTP } from 'express-graphql'
import schema from'./schema/schema.js'
import express  from 'express'

const app = express();
app.use(cors())


app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}))


const PORT = 4000

app.listen(PORT, () => {
    console.log(`Server runnning on port ${PORT}`)
})