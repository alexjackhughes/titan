import * as React from 'react'

import LoginForm from './LoginForm'

interface Props {
  isUser: boolean
  component: React.ReactNode
}

export const AuthenticatedRoute: React.FC<Props> = ({ isUser, component }) => {
  return <>{!isUser ? <LoginForm /> : <>{component}</>}</>
}
