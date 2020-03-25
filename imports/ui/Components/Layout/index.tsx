import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

interface Props {
  isUser: boolean
  logOut: () => void
}

export const Layout: React.FC<Props> = ({ children, isUser, logOut }) => (
  <>
    <Header isUser={isUser} logOut={logOut} />
    <div className="section main has-navbar-fixed-top">
      <div className="container">{children}</div>
    </div>
    <Footer />
  </>
)
