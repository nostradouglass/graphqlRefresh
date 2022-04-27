import {GraphQLObjectType, GraphQLString, GraphQLInt} from 'graphql'

const UserType = new GraphQLObjectType({
    name: 'UserType',
    fields: () => ({
        id: { type: GraphQLString },
        firstName: { type: GraphQLString },
        age: { type: GraphQLInt }
    })
})

export default UserType