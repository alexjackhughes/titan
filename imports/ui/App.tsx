import * as React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { Accounts } from 'meteor/accounts-base'
import { withApollo } from 'react-apollo'

import ResolutionForm from './ResolutionForm'
// import ResolutionItem from './ResolutionItem'
import RegisterForm from './RegisterForm'
import LoginForm from './LoginForm'

import { ResolutionItem } from './Components/ResolutionItem'

const App = ({ loading, refetch, resolutions, client, user }) => {
  // in slow apps, this could load a loading screen
  if (loading) return null

  return (
    <>
      <ResolutionForm refetch={refetch} />
      {resolutions.map(({ name, _id, completed }) => (
        <ResolutionItem key={_id} _id={_id} name={name} completed={completed} onClick={id => {}} onDelete={id => {}} />
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
})(withApollo(App))
