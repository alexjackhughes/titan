import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { withApollo } from 'react-apollo'

import Resolutions from './Containers/Resolutions'
import AutoLogin from './Containers/AutoLogin'

import { AuthenticatedRoute } from '../auth/AuthenticatedRoute'
import { Layout } from './Components/Layout'

interface User {
  _id: string
}

interface Props {
  loading: boolean
  user: User
  client: any
}

const Routes: React.FC<Props> = ({ loading, user, client }) => {
  // in slow apps, this could load a loading screen
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
        <AuthenticatedRoute isUser={isUser} isAuthenticatedRoute={true}>
          <Route exact path="/" component={Resolutions} />
        </AuthenticatedRoute>
        <Route exact path="/login" component={AutoLogin} />
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
