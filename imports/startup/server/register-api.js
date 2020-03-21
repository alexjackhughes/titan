import { createApolloServer } from 'meteor/apollo'
import { makeExecutableSchema } from 'graphql-tools'
import merge from 'lodash/merge'

import UsersSchema from '../../api/users/User.graphql'
import UsersResolvers from '../../api/users/resolvers'

import ResolutionsSchema from '../../api/resolutions/Resolutions.graphql'
import ResolutionsResolvers from '../../api/resolutions/resolvers'

// Here we define data models:
const typeDefs = [UsersSchema, ResolutionsSchema]

// Here we define the methods of the server:
const resolvers = merge(UsersResolvers, ResolutionsResolvers)

// Creaye a schema from the models + methods:
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

// Create the server and attach the schema:
createApolloServer({ schema })
