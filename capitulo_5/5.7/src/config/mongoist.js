const debug = require('debug')
const mongoist = require('mongoist')
const log = debug('livro_nodejs:config:mongoist')
const db = mongoist(process.env.MONGO_URI)
db.on('error', (err) => log('mongodb err', err))
module.exports = db
