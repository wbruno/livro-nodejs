import redis from 'redis'
import { promisify } from 'util'
const client = redis.createClient({
  host: 'localhost',
  port: 6379
})
const getAsync = promisify(client.get).bind(client)
const setAsync = promisify(client.set).bind(client)
let result
client.on('error', (err) => {
  result = { ok: false, message: err.message }
})
client.on('connect', () => {
  result = { ok: true }
})
const check = async () => {
  return {
    name: 'redis',
    ...result
  }
}
export default { getAsync, setAsync, check }
