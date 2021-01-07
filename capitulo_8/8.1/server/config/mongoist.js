import debug from 'debug'
import mongoist from 'mongoist'
import config from 'config'
const log = debug('livro_nodejs:config:mongoist')
const db = mongoist(config.get('mongo.uri'))
db.on('error', (err) => log('mongodb err', err))
db.check = async () => {
  let result = { name: 'mongo' }
  try {
    const data = await db.stats()
    result.ok = data.ok === 1
    result.db = data.db
  } catch (e) {
    result.ok = false
    result.message = e.message
  }
  return {
    name: 'mongo',
    ...result
  }
}
export default db
