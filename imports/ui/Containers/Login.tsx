import * as React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { Accounts } from 'meteor/accounts-base'
import { withApollo } from 'react-apollo'
import { useHistory } from 'react-router-dom'

import LoginForm from '../LoginForm'
import RegisterForm from '../RegisterForm'

interface Props {
  loading: boolean
  user: {
    _id: string
    email: string
  }
  client: any
}
const Login: React.FC<Props> = ({ loading, user, client }) => {
  const history = useHistory()

  // in slow apps, this could load a loading screen
  if (loading) return null

  return (
    <>
      {user && user._id ? (
        <>{history.push('/')}</>
      ) : (
        <>
          <RegisterForm client={client} />
          <LoginForm client={client} />
        </>
      )}
    </>
  )
}

const Query = gql`
  query resolutions {
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
})(withApollo(Login))
