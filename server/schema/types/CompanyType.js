import { GraphQLObjectType, GraphQLString } from "graphql"


const CompanyType = new GraphQLObjectType({
    name: 'CompanyType',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        location: { type: GraphQLString }
    })
});

export default CompanyType;