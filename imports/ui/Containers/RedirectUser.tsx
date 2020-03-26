import * as React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { LoginLinks } from 'meteor/loren:login-links'

const RedirectUser = () => {
  const { token } = useParams()
  const history = useHistory()

  if (!Meteor.userId()) {
    LoginLinks.loginWithToken(token, (e, r) => {
      if (e) {
        // notify
        return
      }
      history.push('/')
    })
  }

  return <div>Loggin In...</div>
}

export default RedirectUser
