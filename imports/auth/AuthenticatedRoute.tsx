import * as React from 'react'

import LoginForm from './LoginForm'

interface Props {
  isUser: boolean
  isAuthenticatedRoute: boolean
}

export const AuthenticatedRoute: React.FC<Props> = ({ isUser, isAuthenticatedRoute, children }) => {
  return <>{isAuthenticatedRoute && !isUser ? <LoginForm /> : <>{children}</>}</>
}
