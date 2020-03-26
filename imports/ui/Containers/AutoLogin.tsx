import * as React from 'react'
import gql from 'graphql-tag'
import { graphql, withApollo } from 'react-apollo'

import { compose } from 'recompose'

const AutoLogin = ({ loading, refetch, generateToken }) => {
  const [hasSubmitted, setSubmitted] = React.useState(false)

  if (loading) return null

  const submitForm = (email: string) => {
    console.log(email)
    generateToken({
      variables: {
        email,
      },
    })
    setSubmitted(true)
  }

  return (
    <>
      <input type="email" ref={input => (this.email = input)} />
      <button onClick={() => submitForm(this.email.value)}>Submit</button>
    </>
  )
}

const Query = gql`
  query userLoggedIn {
    user {
      _id
      email
    }
  }
`

const generateToken = gql`
  mutation generateToken($email: String!) {
    generateToken(email: $email) {
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

export default compose(
  graphql(Query, {
    props: ({ data }) => {
      return {
        ...data,
      }
    },
  }),
  graphql(createResolution, {
    name: 'createResolution',
    options: {
      refetchQueries: ['resolutions'],
    },
  }),
  graphql(generateToken, {
    name: 'generateToken',
    options: {
      refetchQueries: ['userLoggedIn'],
    },
  })
)(withApollo(AutoLogin))
