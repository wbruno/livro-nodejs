import mongoose from '../config/mongoose.js'
import schema from '../schema/Stormtrooper.js'
const model = mongoose.model('Stormtrooper', schema)
const Stormtrooper = {
  list(query = {}) {
    return model.find(query)
  },
  byId(id) {
    return model.findOne({ _id: id })
  },
  create(data) {
    const trooper = new model(data)
    return trooper.save()
  },
  updateById(id, data) {
    return model.updateOne({ _id: id }, data)
  },
  deleteById(id) {
    return model.deleteOne({ _id: id })
  },
}
export default Stormtrooper
