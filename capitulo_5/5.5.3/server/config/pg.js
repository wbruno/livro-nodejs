import pg from 'pg'
import debug from 'debug'
const log = debug('livro_nodejs:config:pg')
const pool = new pg.Pool({
  user: 'wbruno',
  password: '',
  host: 'localhost',
  port: 5432,
  database: 'livro_nodejs',
  max: 5
})
pool.on('error', (err) => log('postgres err', err))
export default pool
