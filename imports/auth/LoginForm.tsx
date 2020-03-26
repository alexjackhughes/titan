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

  const keyPressed = event => {
    if (event.key === 'Enter') {
      submitForm(this.email.value)
    }
  }

  return (
    <>
      {hasSubmitted ? (
        <div className="page-container">
          <div className="form-container card has-padding-large">
            <div className="has-margin-bottom-medium has-padding-medium">
              <h4 className="title is-3">Email Sent</h4>
              <p>
                We sent an email to you at <span className="has-text-weight-bold">{this.email.value}</span>. It has a
                magic link that will let you sign in.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="page-container">
          <div className="form-container card has-padding-large">
            <div className="has-margin-bottom-medium has-padding-medium">
              <h4 className="title is-3 no-margin">Passwords are boring</h4>
              <p>Get a magic link sent to your email that'll sign you in instantly.</p>
            </div>
            <div className="field">
              <p className="control has-icons-left has-icons-right">
                <input
                  className="input is-medium"
                  type="email"
                  placeholder="hello@titan.com"
                  ref={input => (this.email = input)}
                  onKeyPress={keyPressed}
                />
                <span className="icon is-small is-left">
                  <i className="fad fa-envelope-open" />
                </span>
                <span className="icon is-small is-right">
                  <i className="fas fa-check" />
                </span>
              </p>
            </div>
            <button className="button is-large is-full-width is-primary" onClick={() => submitForm(this.email.value)}>
              <span className="icon is-medium">
                <i className="fad fa-hat-wizard" />
              </span>
              <span className="has-text-weight-bold">Send Magic Link</span>
            </button>
          </div>
        </div>
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
