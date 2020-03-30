import * as React from 'react'
import gql from 'graphql-tag'
import { graphql, withApollo } from 'react-apollo'
import { compose } from 'recompose'

import { validateEmail } from '../utils/validateEmail'

const LoginForm = ({ loading, refetch, generateToken }) => {
  const [email, setEmail] = React.useState<string>('')
  const [hasSubmitted, setSubmitted] = React.useState<boolean>(false)
  const [isEmail, setIsEmail] = React.useState<boolean>(true)

  if (loading) return null

  const submitForm = () => {
    if (!validateEmail(email)) {
      setIsEmail(false)
      return
    }

    generateToken({
      variables: {
        email,
      },
    })
    setSubmitted(true)
  }

  const keyPressed = event => {
    if (event.key === 'Enter') {
      submitForm()
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
                We sent an email to you at <span className="has-text-weight-bold">{email}</span>. It has a magic link
                that will let you sign in.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="page-container">
          <div className="form-container card has-padding-large">
            <div className="has-margin-bottom-medium has-padding-medium">
              <h4 className="title is-3 no-spacing has-text-primary">Passwords are boring</h4>
              <p className="has-text-primary">Get a magic link sent to your email that will sign you in instantly.</p>
            </div>
            <div className="field">
              <p className="control has-icons-left has-icons-right">
                <input
                  className="input is-medium"
                  type="email"
                  autoFocus
                  placeholder="hello@titan.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  onKeyPress={keyPressed}
                />
                <span className="icon is-small is-left">
                  <i className="fad fa-envelope-open" />
                </span>
                <span className="icon is-small is-right">
                  <i className={`${isEmail ? 'fas fa-check has-text-success' : 'fas fa-times has-text-danger'}`} />
                </span>
              </p>
            </div>
            <button className="button is-full-width is-primary" onClick={() => submitForm()}>
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
      token
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
