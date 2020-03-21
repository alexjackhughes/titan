import Resolutions from './resolutions'

export default {
  Query: {
    resolutions() {
      return Resolutions.find({}).fetch({})
    },
    resolution(obj, { _id }, context) {
      return Resolutions.findOne(_id)
    },
  },
  Mutation: {
    createResolution(obj, { name }, context) {
      Resolutions.insert({
        name,
      })
      return Resolutions.findOne(id)
    },
    updateResolution(obj, { _id, name }, context) {
      Resolutions.update(_id, {
        name,
      })
      return Resolutions.findOne(_id)
    },
    deleteResolution(obj, { _id }, context) {
      const oldResolution = Resolutions.findOne(_id)
      Resolutions.remove(_id)
      return oldResolution
    },
  },
}
