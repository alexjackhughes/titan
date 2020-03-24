import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

interface Props {
  isUser: boolean
}

export const Layout: React.FC<Props> = ({ children, isUser }) => (
  <>
    <Header isUser={isUser} />
    <div className="container">{children}</div>
    <Footer />
  </>
)
