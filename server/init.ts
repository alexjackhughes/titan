import { createApolloServer } from 'meteor/apollo'
import { makeExecutableSchema } from 'graphql-tools'
import merge from 'lodash/merge'

import GoalsSchema from '../imports/api/goals/Goal.graphql'
import GoalsResolvers from '../imports/api/goals/resolvers'

import UsersSchema from '../imports/api/users/User.graphql'
import UsersResolvers from '../imports/api/users/resolvers'

import ResolutionsSchema from '../imports/api/resolutions/Resolution.graphql'
import ResolutionsResolvers from '../imports/api/resolutions/resolvers'

// TODO
// Here we define data models:
const typeDefs = [GoalsSchema, UsersSchema, ResolutionsSchema]

// Here we define the methods of the server:
const resolvers = merge(GoalsResolvers, UsersResolvers, ResolutionsResolvers)

// Creaye a schema from the models + methods:
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

// Create the server and attach the schema:
createApolloServer({ schema })
