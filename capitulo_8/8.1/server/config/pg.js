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
pool.check = async () => {
  let result = {}
  try {
    const data = await pool.query('select version()')
    result.ok = !!data.rows[0].version
  } catch (e) {
    result.ok = false
    result.message = e.message
  }
  return {
    name: 'postgres',
    ...result
  }
}
export default pool
