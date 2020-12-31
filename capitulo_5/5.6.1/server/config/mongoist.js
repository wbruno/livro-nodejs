import debug from 'debug'
import mongoist from 'mongoist'
import config from 'config'
const log = debug('livro_nodejs:config:mongoist')
const db = mongoist(config.get('mongo.uri'))
db.on('error', (err) => log('mongodb err', err))
export default db
