import { createApolloServer } from 'meteor/apollo'
import { makeExecutableSchema } from 'graphql-tools'
import merge from 'lodash/merge'

import ResolutionsSchema from '../../api/resolutions/Resolutions.graphql'
import ResolutionsResolvers from '../../api/resolutions/resolvers'

// Define the queries for application
const Queries = `
type Query {
  hi: String
  resolutions: [Resolution]
}
`

// Here we define the allowed queries + data models
const typeDefs = [Queries, ResolutionsSchema]

const testResolver = {
  Query: {
    hi() {
      return 'Hello World'
    },
  },
}

// Here we define the methods of the server
const resolvers = merge(testResolver, ResolutionsResolvers)

// Set up the schema:
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

// Create a server and attach the schema:
createApolloServer({ schema })
