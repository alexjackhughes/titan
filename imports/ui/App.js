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
import GoalForm from './GoalForm'
import GoalItem from './GoalItem'

const App = ({ loading, refetch, resolutions, client, user }) => {
  // in slow apps, this could load loading screen
  if (loading) return null

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
          {resolutions.map(({ name, _id, goals, completed }, index) => (
            <div key={index}>
              <ResolutionItem name={name} _id={_id} completed={completed} key={_id} />
              <GoalForm resolutionId={_id} key={`${_id}-goals`} />
              {goals.map((goal, index) => (
                <GoalItem key={index} goal={goal} index={index} />
              ))}
            </div>
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
      goals {
        _id
        name
        completed
      }
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
