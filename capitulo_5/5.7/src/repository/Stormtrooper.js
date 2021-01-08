const mongoist = require('mongoist')
const db = require('../config/mongoist.js')
const Stormtrooper = {
  list(query = {}) {
    return db.stormtroopers.find(query)
  },
  byId(id) {
    return db.stormtroopers.findOne({ _id: mongoist.ObjectId(id) })
  },
  create({ name, nickname, patent, divisions }) {
    return db.stormtroopers.insert({ name, nickname, patent, divisions })
  },
  updateById(id, { name, nickname, patent, divisions }) {
    return db.stormtroopers.update({ _id: mongoist.ObjectId(id) }, { $set: { name, nickname, patent, divisions } })
  },
  deleteById(id) {
    return db.stormtroopers.remove({ _id: mongoist.ObjectId(id) })
  },
}
module.exports = Stormtrooper
