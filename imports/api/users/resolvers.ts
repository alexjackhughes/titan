import { LoginLinks } from 'meteor/loren:login-links'
import cryptoRandomString from 'crypto-random-string'
import { Email } from 'meteor/email'
import { validateEmail } from '../../utils/validateEmail'

const createLoginEmail = (token: string): string => {
  return `
    This is your magic link! Just click to login:

    ${Meteor.absoluteUrl().replace(/\/$/, '') + '/login/' + token}
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
      if (!validateEmail(email)) throw new Error('Email is not valid')

      const foundExistingUser = Accounts.findUserByEmail(email)

      if (!foundExistingUser) {
        const password = cryptoRandomString({ length: 20 })
        Accounts.createUser({ email, password })
      }

      const foundNewOrExistingUser = foundExistingUser || Accounts.findUserByEmail(email)

      const token = LoginLinks.generateAccessToken(foundNewOrExistingUser)

      Email.send({
        from: 'hello@titan.com',
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
