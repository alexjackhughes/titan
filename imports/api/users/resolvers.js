export default {
  Query: {
    user(obj, args, { userId, user }) {
      return user || {}
    },
  },
}
