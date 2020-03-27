import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { withApollo } from 'react-apollo'

import Resolutions from './containers/Resolutions'
import { Layout } from './components/Layout'

import LoginUserWithToken from '../auth/LoginUserWithToken'
import { AuthenticatedRoute } from '../auth/AuthenticatedRoute'

interface User {
  _id: string
}

interface Props {
  loading: boolean
  user: User
  client: any
}

const Routes: React.FC<Props> = ({ loading, user, client }) => {
  if (loading) return null

  const isUser = user && !!user._id

  return (
    <Switch>
      <Layout
        isUser={isUser}
        logOut={() => {
          Meteor.logout()
          client.resetStore()
        }}
      >
        <AuthenticatedRoute isUser={isUser}>
          <Resolutions />
        </AuthenticatedRoute>
        <Route exact path="/login/:token" component={LoginUserWithToken} />
      </Layout>
    </Switch>
  )
}

const Query = gql`
  query resolutions {
    resolutions {
      _id
      name
      userId
      completed
    }
    user {
      _id
      email
    }
  }
`

export default graphql(Query, {
  props: ({ data }) => ({
    ...data,
  }),
})(withApollo(Routes))
