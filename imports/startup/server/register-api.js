import { createApolloServer } from 'meteor/apollo'
import { makeExecutableSchema } from 'graphql-tools'
import merge from 'lodash/merge'

import ResolutionsSchema from '../../api/resolutions/Resolutions.graphql'
import ResolutionsResolvers from '../../api/resolutions/resolvers'

//todo
// Here we define data models:
const typeDefs = [ResolutionsSchema]

// Here we define the methods of the server:
const resolvers = merge(ResolutionsResolvers)

// Creaye a schema from the models + methods:
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

// Create the server and attach the schema:
createApolloServer({ schema })
