import graphql from 'graphql'
 import mutation from './mutations.js'
const { GraphQLSchema } = graphql
import { GraphQLObjectType, GraphQLList, GraphQLInt, GraphQLString } from "graphql"
 import RootQuery from './root_query.js'


const schema =  new GraphQLSchema({
     query: RootQuery,
     mutation: mutation
})

export default schema