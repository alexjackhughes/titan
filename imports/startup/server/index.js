import { createApolloServer } from 'meteor/apollo'
import { makeExecutableSchema } from 'graphql-tools'

// This is defining the data structure:
const typeDefs = `
type Query {
  hi: String
}
`

// These are the methods for the server:
const resolvers = {
  Query: {
    hi() {
      return 'Hello World'
    },
  },
}

// Set up the schema:
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

// Create a server and attach the schema:
createApolloServer({ schema })
