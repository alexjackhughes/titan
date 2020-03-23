import Resolutions from './resolutions'
import Goals from '../goals/goals'

const isUser = userId => {
  if (!userId) {
    throw new Error('Unauthorized user')
  }
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
    resolution(obj, { _id }, context) {
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
        userId,
      })
      return Resolutions.findOne(id)
    },
    updateResolution(obj, { _id, name }, context) {
      isUser(userId)
      Resolutions.update(_id, {
        name,
      })
      return Resolutions.findOne(_id)
    },
    deleteResolution(obj, { _id }, context) {
      isUser(userId)
      const oldResolution = Resolutions.findOne(_id)
      Resolutions.remove(_id)
      return oldResolution
    },
  },
  Resolution: {
    goals: resolution => Goals.find({ resolutionId: resolution._id }).fetch(),
    completed: resolution => {
      const goals = Goals.find({ resolutionId: resolution._id, completed: false }).fetch()
      return goals.length > 0 ? false : true
    },
  },
}
