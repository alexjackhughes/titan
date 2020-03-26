import * as React from 'react'
import gql from 'graphql-tag'
import { graphql, withApollo } from 'react-apollo'
import { compose } from 'recompose'

const LoginForm = ({ loading, refetch, generateToken }) => {
  const [hasSubmitted, setSubmitted] = React.useState(false)

  if (loading) return null

  const submitForm = (email: string) => {
    generateToken({
      variables: {
        email,
      },
    })
    setSubmitted(true)
  }

  return (
    <>
      {hasSubmitted ? (
        <p>Thanks! Please check your emails</p>
      ) : (
        <>
          <input type="email" ref={input => (this.email = input)} placeholder="hello@example.com" />
          <button onClick={() => submitForm(this.email.value)}>Send magic link</button>
        </>
      )}
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

export default compose(
  graphql(Query, {
    props: ({ data }) => {
      return {
        ...data,
      }
    },
  }),
  graphql(generateToken, {
    name: 'generateToken',
    options: {
      refetchQueries: ['userLoggedIn'],
    },
  })
)(withApollo(LoginForm))
