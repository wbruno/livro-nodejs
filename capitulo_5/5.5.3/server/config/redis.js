import { createClient } from 'redis';
import { promisify } from 'util';
const client = createClient({
  host: 'localhost',
  port: 6379
})
client.on('error', (e) => console.log(e))
export const getAsync = promisify(client.get).bind(client)
export const setAsync = promisify(client.set).bind(client)
