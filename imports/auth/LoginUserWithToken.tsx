import * as React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { LoginLinks } from 'meteor/loren:login-links'
import { withApollo } from 'react-apollo'
import { compose } from 'recompose'

const LoginUserWithToken = ({ client }) => {
  const { token } = useParams()
  const history = useHistory()

  if (!Meteor.userId()) {
    LoginLinks.loginWithToken(token, (e, r) => {
      client.resetStore()
      history.push('/')
    })
  } else {
    history.push('/')
  }

  return <div />
}

export default compose()(withApollo(LoginUserWithToken))
