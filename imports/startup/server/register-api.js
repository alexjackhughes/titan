import { createApolloServer } from 'meteor/apollo'
import { makeExecutableSchema } from 'graphql-tools'
import merge from 'lodash/merge'

import GoalsSchema from '../../api/goals/Goal.graphql'
import GoalsResolvers from '../../api/goals/resolvers'

import UsersSchema from '../../api/users/User.graphql'
import UsersResolvers from '../../api/users/resolvers'

import ResolutionsSchema from '../../api/resolutions/Resolution.graphql'
import ResolutionsResolvers from '../../api/resolutions/resolvers'

// todo sswww
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
