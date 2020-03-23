import Goals from './goals'

/**
 * Understanding the function parameters:
 *
 * - args: is the arguments passed to this method
 * - context: is info about the current user
 */
export default {
  Mutation: {
    createGoal(obj, { name, resolutionId }) {
      const goalId = Goals.insert({
        name,
        resolutionId,
        completed: false,
      })

      return Goals.findOne(goalId)
    },
    toggleGoal(obj, { _id }) {
      const goal = Goals.findOne(_id)
      Goals.update(_id, {
        $set: {
          completed: !goal.completed,
        },
      })

      return goal
    },
  },
}
