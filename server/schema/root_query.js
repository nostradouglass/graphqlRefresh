import { GraphQLObjectType, GraphQLList, GraphQLInt, GraphQLString } from "graphql"
 import UserType from './types/UserType.js'
import CompanyType from './types/CompanyType.js'

 import  pkg  from '@prisma/client'
 const { PrismaClient } = pkg;

 const prisma = new PrismaClient()

   const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        users: {    
            type: new GraphQLList(UserType),
            resolve() {
                return prisma.user.findMany()
            }
        },
        user: {
            type: UserType,
            args: { id: {type: GraphQLString } },
            resolve(parentValue, args) {
                return prisma.user.findUnique({
                    where: {
                        id: id
                    }
                })
            }
        },
        companies: {
            type: new GraphQLList(CompanyType),
            resolve() {
                return prisma.company.findMany();
            }
        },
        company: {
            type: CompanyType,
            args: { id: { type: GraphQLString }},
            resolve(parentValue, args) {
                return prisma.company.findUnique({
                    where: {
                        id: id
                    }
                })
            }
        }
    }
})

export default RootQuery
