import * as React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { Accounts } from 'meteor/accounts-base'
import { withApollo } from 'react-apollo'

import ResolutionForm from './ResolutionForm'
import ResolutionItem from './ResolutionItem'
import RegisterForm from './RegisterForm'
import LoginForm from './LoginForm'

const App = ({ loading, refetch, resolutions, client }) => {
  if (loading) return null

  return (
    <>
      {!!Accounts.userId() ? (
        <button
          onClick={() => {
            Meteor.logout()
            client.resetStore()
          }}
        >
          Logout
        </button>
      ) : (
        <>
          <RegisterForm client={client} />
          <LoginForm client={client} />
        </>
      )}
      <h1>Hello World</h1>
      <ResolutionForm refetch={refetch} />
      {resolutions.map(({ name, _id }) => (
        <ResolutionItem name={name} _id={_id} key={_id} />
      ))}
    </>
  )
}

const Query = gql`
  query resolutions {
    resolutions {
      _id
      name
      userId
    }
  }
`

export default graphql(Query, {
  props: ({ data }) => ({
    ...data,
  }),
})(withApollo(App))
