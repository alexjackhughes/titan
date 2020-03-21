import React, { Component } from 'react'

class LoginForm extends Component {
  login = e => {
    e.preventDefault()
    Meteor.loginWithPassword(this.email.value, this.password.value, error => {
      if (!error) {
        this.props.client.resetStore()
        this.props.setLoggedIn(true)
      }
    })
  }

  render() {
    return (
      <form onSubmit={this.login}>
        <input type="email" ref={input => (this.email = input)} />
        <input type="password" ref={input => (this.password = input)} />
        <button type="submit">Login User</button>
      </form>
    )
  }
}

export default LoginForm
