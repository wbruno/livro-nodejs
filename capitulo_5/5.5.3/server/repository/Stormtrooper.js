import db from '../config/pg.js'
import { setAsync } from '../config/redis.js'

const sql = `SELECT
  st.id, st.name, st.nickname,
  p.name as patent
  FROM stormtroopers st
  JOIN patents p ON p.id = st.id_patent`

const Stormtrooper = {
  list(q = '', page = 1) {
    const DEFAULT_LIMIT = 3
    const skip = Math.abs(page - 1) * DEFAULT_LIMIT
    const where = q ? `WHERE st.name ilike '%' || $1::text || '%'` : ` WHERE $1::text = ''`
    return db.query(`${sql} ${where} LIMIT ${DEFAULT_LIMIT} OFFSET ${skip}`, [q])
      .then(result => result.rows)
  },
  byId(id) {
    return db.query(`${sql} WHERE st.id = $1::int`, [id])
      .then(result => result.rows && result.rows[0])
      .then(result => {
        const SIX_MINUTES = 60 * 6
        setAsync(`trooper:${id}`, JSON.stringify(result), 'EX', SIX_MINUTES)
          .catch(e => console.log(e))
        return result
      })
  },
  create(data) {
    const sql = `INSERT INTO stormtroopers (name, nickname, id_patent)
      VALUES ($1::text, $2::text, $3::int)
      RETURNING id`
    const params = [data.name, data.nickname, data.id_patent]
    return db.query(sql, params)
      .then(result => this.byId(result.rows[0].id))
  },
  updateById(id, data) {
    const sql = `UPDATE stormtroopers SET
      name = $1::text,
      nickname = $2::text,
      id_patent = $3::int
      WHERE id = $4::int`
    const params = [data.name, data.nickname, data.id_patent, id]
    return db.query(sql, params)
  },
  deleteById(id) {
    return db.query(`DELETE FROM stormtroopers WHERE id = $1::int`, [id])
  },
}
export default Stormtrooper
