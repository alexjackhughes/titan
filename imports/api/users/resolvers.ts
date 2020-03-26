export default {
  Query: {
    user(obj, args, { user }) {
      return user || {}
    },
  },
  Mutation: {
    generateToken(obj, { email }, { user }) {
      console.log('WOO')
      console.log(email)

      // // find a user first
      // // const user = Accounts.findUserByEmail(email)
      // // console.log(user)

      // // if a user doesn't exist, we want to create a user

      // // Then we want to generate a token based on the user

      return user || {}
    },
  },
  User: {
    email: user => user.emails && user.emails[0].address,
  },
}
