import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { withApollo } from 'react-apollo'

import Resolutions from '../Containers/Resolutions'
import Login from '../Containers/Login'
import { Layout } from '../Components/Layout'

interface Props {
  loading: boolean
  user: {
    _id: string
  }
  client: any
}

const Routes: React.FC<Props> = ({ loading, user, client }) => {
  // in slow apps, this could load a loading screen
  if (loading) return null

  return (
    <Switch>
      <Layout
        isUser={user && !!user._id}
        logOut={() => {
          Meteor.logout()
          client.resetStore()
        }}
      >
        <Route exact path="/" component={Resolutions} />
        <Route exact path="/login" component={Login} />
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
