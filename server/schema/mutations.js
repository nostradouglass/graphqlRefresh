import pkg from '@prisma/client';
const { PrismaClient } = pkg;
import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'
import CompanyType from "./types/CompanyType.js"
import UserType from "./types/UserType.js"

const prisma = new PrismaClient()

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addUser: {
            type: UserType,
            args: {
                firstName: { type: GraphQLString },
                age: { type: GraphQLInt }
            },
            resolve(parentValue, { firstName, age }) {
                return prisma.user.create({
                    data: {
                        firstName: firstName,
                        age: age
                    }
                })
            }
        },
        addCompany: {
            type: CompanyType,
            args: {
                name: { type: GraphQLString },
                location: { type: GraphQLString }
            },
            resolve(parentValue, { name, location }) {
                return prisma.company.create({
                    data: {
                        name,
                        location
                    }
                })
            }
        },
        removeCompany: {
            type: CompanyType,
            args: {
                id: { type: GraphQLString }
            },
            resolve(parentValue, { id }) {
                return prisma.company.delete({
                    where: {
                        id: parseInt(id)
                    }
                })
            }
        }
    }
})


export default mutation