import mongoist from 'mongoist'
import db from '../config/mongoist.js'
const StormtrooperRepository = {
  list(query = {}) {
    return db.stormtroopers.find(query)
  },
  byId(id) {
    return db.stormtroopers.findOne({ _id: mongoist.ObjectId(id) })
  }
}
export default StormtrooperRepository
