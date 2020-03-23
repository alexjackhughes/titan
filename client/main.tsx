import React from 'react'
import { Meteor } from 'meteor/meteor'
import { render } from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import { ApolloLink, from } from 'apollo-link'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { BrowserRouter as Router } from 'react-router-dom'

import App from '../imports/ui/App'

import './main.scss'
import Routes from '../imports/ui/Routes'

const cache = new InMemoryCache()

const htttpLink = new HttpLink({
  uri: Meteor.absoluteUrl('graphql'),
})

const authLink = new ApolloLink((operation, forward) => {
  // @ts-ignore
  const token = Accounts._storedLoginToken()

  operation.setContext(() => ({
    headers: {
      'meteor-login-token': token,
    },
  }))

  return forward(operation)
})

const client = new ApolloClient({
  link: from([authLink, htttpLink]),
  cache,
})

export const ApolloApp = () => (
  <ApolloProvider client={client}>
    <Router>
      <Routes />
    </Router>
  </ApolloProvider>
)

Meteor.startup(() => {
  render(<ApolloApp />, document.getElementById('root'))
})
