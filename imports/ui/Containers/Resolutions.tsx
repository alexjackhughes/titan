import * as React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { Accounts } from 'meteor/accounts-base'
import { withApollo } from 'react-apollo'
import { compose } from 'recompose'

import { ResolutionForm } from '../Components/Resolutions/ResolutionForm'
import { ResolutionItem } from '../Components/Resolutions/ResolutionItem'

const Resolutions = ({ loading, refetch, createResolution, deleteResolution, completeResolution, resolutions }) => {
  if (loading) return null

  const submitForm = (value: string) => {
    createResolution({
      variables: {
        name: value,
      },
    })
  }

  const completeGoal = (_id: string, completed: boolean) => {
    completeResolution({
      variables: {
        _id,
        completed,
      },
    })
  }

  const deleteGoal = (_id: string) => {
    deleteResolution({
      variables: {
        _id: _id,
      },
    })
  }

  return (
    <>
      <ResolutionForm onClick={submitForm} />
      {resolutions.map(({ name, _id, completed }) => (
        <ResolutionItem
          key={_id}
          _id={_id}
          name={name}
          completed={completed}
          onClick={completeGoal}
          onDelete={deleteGoal}
        />
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

const createResolution = gql`
  mutation createResolution($name: String!) {
    createResolution(name: $name) {
      _id
    }
  }
`
const completeResolution = gql`
  mutation completeResolution($_id: String!, $completed: Boolean!) {
    completeResolution(_id: $_id, completed: $completed) {
      _id
      completed
    }
  }
`

const deleteResolution = gql`
  mutation deleteResolution($_id: String!) {
    deleteResolution(_id: $_id) {
      _id
    }
  }
`

export default compose(
  graphql(Query, {
    props: ({ data }) => ({
      ...data,
    }),
  }),
  graphql(createResolution, {
    name: 'createResolution',
    options: {
      refetchQueries: ['resolutions'],
    },
  }),
  graphql(deleteResolution, {
    name: 'deleteResolution',
    options: {
      refetchQueries: ['resolutions'],
    },
  }),
  graphql(completeResolution, {
    name: 'completeResolution',
    options: {
      refetchQueries: ['resolutions'],
    },
  })
)(withApollo(Resolutions))
