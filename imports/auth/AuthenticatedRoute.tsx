import * as React from 'react'

import Login from '../ui/Containers/Login'

interface Props {
  isUser: boolean
  isAuthenticatedRoute: boolean
}

export const AuthenticatedRoute: React.FC<Props> = ({ isUser, isAuthenticatedRoute, children }) => {
  return <>{isAuthenticatedRoute && !isUser ? <Login /> : <>{children}</>}</>
}
