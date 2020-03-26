import * as React from 'react'

import LoginForm from './LoginForm'

interface Props {
  isUser: boolean
}

export const AuthenticatedRoute: React.FC<Props> = ({ isUser, children }) => {
  return <>{!isUser ? <LoginForm /> : <>{children}</>}</>
}
