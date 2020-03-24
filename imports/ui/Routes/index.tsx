import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { Accounts } from 'meteor/accounts-base'
import { withApollo } from 'react-apollo'
import { useHistory } from 'react-router-dom'

import App from '../App'
import Login from '../Containers/Login'
import { Layout } from '../Components/Layout'

interface Props {
  loading: boolean
  user: {
    _id: string
  }
}

const Routes: React.FC<Props> = ({ loading, user }) => {
  //const history = useHistory()

  // in slow apps, this could load a loading screen
  if (loading) return null

  return (
    <Switch>
      <Layout isUser={user && !!user._id}>
        <Route exact path="/" component={App} />
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
