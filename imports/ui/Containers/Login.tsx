import * as React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { withApollo } from 'react-apollo'

import LoginForm from '../../auth/LoginForm'
import RegisterForm from '../../auth/RegisterForm'

interface Props {
  loading: boolean
  client: any
}
const Login: React.FC<Props> = ({ loading, client }) => {
  // in slow apps, this could load a loading screen
  if (loading) return null

  return (
    <>
      <RegisterForm client={client} />
      <LoginForm client={client} />
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
