import { LoginLinks } from 'meteor/loren:login-links'
import cryptoRandomString from 'crypto-random-string'
import { Email } from 'meteor/email'

const createLoginEmail = (token: string): string => {
  return `
    This is your magic link! Just click to login:

    ${Meteor.absoluteUrl().replace(/\/$/, '') + '/token/' + token}
  `
}

export default {
  Query: {
    user(obj, args, { user }) {
      return user || {}
    },
  },
  Mutation: {
    generateToken(obj, { email }, { user }) {
      const foundExistingUser = Accounts.findUserByEmail(email)

      if (!foundExistingUser) {
        const password = cryptoRandomString({ length: 20 })
        Accounts.createUser({ email, password })
      }

      const foundNewOrExistingUser = foundExistingUser || Accounts.findUserByEmail(email)

      // Then we want to generate a token based on the user
      const token = LoginLinks.generateAccessToken(foundNewOrExistingUser)

      // And now, we want to send an email to the user with the token as an email:
      Email.send({
        from: 'alex@example.com',
        to: email,
        subject: 'Sign in to titan!',
        text: createLoginEmail(token),
      })

      return {
        token: 'An email with the token has been sent!',
      }
    },
  },
  User: {
    email: user => user.emails && user.emails[0].address,
  },
}
