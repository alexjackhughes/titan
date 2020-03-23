import React, { useState } from 'react'
import { Accounts } from 'meteor/accounts-base'

const logOut = () => {}
export const Header = () => {
  const [isActive, setIsActive] = useState(false)

  console.log('isActive', isActive)
  return (
    <>
      <div className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              alt="Bulma: Free, open source, and modern CSS framework based on Flexbox"
              width="112"
              height="28"
            />
          </a>
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
      </div>
      {isActive && (
        <aside className="menu has-text-right is-hidden-desktop">
          <ul className="menu-list">
            <li>
              <a className="has-text-weight-bold is-size-2-mobile">HOME</a>
            </li>
            <li>
              <a
                className="has-text-weight-bold is-size-2-mobile"
                onClick={() => {
                  Meteor.logout()
                }}
              >
                LOGOUT
              </a>
            </li>
          </ul>
        </aside>
      )}
    </>
  )
}
