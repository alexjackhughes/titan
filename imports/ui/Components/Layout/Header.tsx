import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Accounts } from 'meteor/accounts-base'

interface Props {
  isUser: boolean
  logOut: () => void
}

export const Header: React.FC<Props> = ({ isUser, logOut }) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <>
      <div className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              alt="Bulma: Free, open source, and modern CSS framework based on Flexbox"
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
            <div className="navbar-menu is-hidden-touch">
              <div className="navbar-start">
                <Link className="navbar-item" to="/">
                  Goals
                </Link>
              </div>
            </div>
            <div className="navbar-end is-hidden-touch">
              <div className="navbar-item">
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
                <Link className="button is-primary" to="/login">
                  <strong>Sign In</strong>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
      {isActive && (
        <aside className="menu has-text-right is-hidden-desktop">
          <ul className="menu-list">
            {isUser ? (
              <>
                <li>
                  <Link className="has-text-weight-bold is-size-2-mobile" to="/">
                    GOALS
                  </Link>
                </li>
                <li>
                  <a className="has-text-weight-bold is-size-2-mobile" onClick={logOut}>
                    LOGOUT
                  </a>
                </li>
              </>
            ) : (
              <li>
                <Link className="has-text-weight-bold is-size-2-mobile" to="/login">
                  LOGIN
                </Link>
              </li>
            )}
          </ul>
        </aside>
      )}
    </>
  )
}
