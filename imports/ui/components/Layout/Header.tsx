import React, { useState } from 'react'
import { Link } from 'react-router-dom'

interface Props {
  isUser: boolean
  logOut: () => void
}

export const Header: React.FC<Props> = ({ isUser, logOut }) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <>
      <div className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img
              src="/logo.png?v=1"
              alt="Titan: A framework for building web frameworks faster"
              width="112"
              height="28"
            />
          </Link>
          <span
            className={`navbar-burger burger ${isActive && 'is-active'}`}
            data-target="navbarMenuHeroA"
            onClick={() => setIsActive(!isActive)}
          >
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        {isUser ? (
          <>
            <div className={`navbar-menu ${isActive && 'is-active'}`}>
              <div className="navbar-start">
                <Link className="navbar-item" to="/">
                  Goals
                </Link>
              </div>
            </div>
            <div className={`navbar-menu ${isActive && 'is-active'} is-hidden-desktop`}>
              <div className="navbar-start">
                <a className="navbar-item" onClick={logOut}>
                  Sign out
                </a>
              </div>
            </div>
            <div className="navbar-end">
              <div className="navbar-item is-hidden-touch">
                <div className="buttons">
                  <a className="button is-primary" onClick={logOut}>
                    <strong>Sign Out</strong>
                  </a>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="navbar-end is-hidden-touch">
            <div className="navbar-item">
              <div className="buttons">
                <Link className="button is-primary" to="/">
                  <strong>Sign In</strong>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
