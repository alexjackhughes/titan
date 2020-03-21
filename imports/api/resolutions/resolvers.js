import Resolutions from './resolutions'

console.log('server resolutions: ', Resolutions.find({}).fetch({}))

export default {
  Query: {
    resolutions() {
      return Resolutions.find({}).fetch({})
    },
  },
  Mutation: {
    createResolution(obj, { name }, context) {
      console.log('server: ', name)
      const id = Resolutions.insert({
        name,
      })
      return Resolutions.findOne(id)
    },
  },
}
