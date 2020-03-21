import * as React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { Accounts } from 'meteor/accounts-base'
import { withApollo } from 'react-apollo'

import './App.scss'

import ResolutionForm from './ResolutionForm'
import ResolutionItem from './ResolutionItem'
import RegisterForm from './RegisterForm'
import LoginForm from './LoginForm'

const App = ({ loading, refetch, resolutions, client, user }) => {
  if (loading) return <p>Loading</p>

  return (
    <>
      {user && user._id ? (
        <>
          <button
            className="button is-primary"
            onClick={() => {
              Meteor.logout()
              client.resetStore()
            }}
          >
            {`Logout`}
          </button>
          <ResolutionForm refetch={refetch} />
          {resolutions.map(({ name, _id }) => (
            <ResolutionItem name={name} _id={_id} key={_id} />
          ))}
        </>
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
    resolutions {
      _id
      name
      userId
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
