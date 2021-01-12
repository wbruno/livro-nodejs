import mongoist from 'mongoist'
import db from '../config/mongoist.js'
const Stormtrooper = {
  list(q, page = 1) {
    const query = {}
    if (q) query.name = new RegExp(q, 'i')
    const DEFAULT_LIMIT = 3
    const skip = Math.abs(page - 1) * DEFAULT_LIMIT
    return db.stormtroopers.find(query, {}, { skip, limit: DEFAULT_LIMIT })
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
export default Stormtrooper
