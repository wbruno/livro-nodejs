import mongoist from 'mongoist'
import db from '../config/mongoist.js'
const StormtrooperRepository = {
  list(query = {}) {
    return db.stormtroopers.find(query)
  },
  byId(id) {
    return db.stormtroopers.findOne({ _id: mongoist.ObjectId(id) })
  },
  create(data) {
    return db.stormtroopers.insert(data)
  },
  updateById(id, data) {
    return db.stormtroopers.update({ _id: mongoist.ObjectId(id) }, { $set: data })
  },
  deleteById(id) {
    return db.stormtroopers.remove({ _id: mongoist.ObjectId(id) })
  },
}
export default StormtrooperRepository
