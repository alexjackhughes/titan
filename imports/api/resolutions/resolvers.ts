import Resolutions from './resolutions'

const isUser = (userId) => {
  if (!userId) throw new Error('Unauthorized user')
}

/**
 * Understanding the function parameters:
 *
 * - args: is the arguments passed to this method
 * - context: is info about the current user
 */
export default {
  Query: {
    resolutions(obj, args, { userId }) {
      if (!userId) return []

      return Resolutions.find({
        userId,
      }).fetch({})
    },
    resolution(obj, { _id }, { userId }) {
      if (!userId) return []

      return Resolutions.findOne(_id)
    },
    searchResolution(obj, { key, value }, { userId }) {
      if (!userId) return []

      return Resolutions.find({
        [key]: value,
        userId,
      }).fetch({})
    },
  },
  Mutation: {
    createResolution(obj, { name }, { userId }) {
      isUser(userId)
      const id = Resolutions.insert({
        name,
        completed: false,
        userId,
      })
      return Resolutions.findOne(id)
    },
    completeResolution(obj, { _id, completed }, { userId }) {
      isUser(userId)

      const item = Resolutions.findOne(_id)

      Resolutions.update(_id, {
        name: item.name,
        userId: item.userId,
        completed,
      })

      return Resolutions.findOne(_id)
    },
    updateResolution(obj, { _id, name }, { userId }) {
      isUser(userId)
      Resolutions.update(_id, {
        name,
      })
      return Resolutions.findOne(_id)
    },
    deleteResolution(obj, { _id }, { userId }) {
      isUser(userId)
      const oldResolution = Resolutions.findOne(_id)
      Resolutions.remove(_id)
      return oldResolution
    },
  },
}
