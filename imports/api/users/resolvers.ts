import { LoginLinks } from 'meteor/loren:login-links'
import cryptoRandomString from 'crypto-random-string'

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
      console.log('token', token)

      return {
        token,
      }
    },
  },
  User: {
    email: user => user.emails && user.emails[0].address,
  },
}
