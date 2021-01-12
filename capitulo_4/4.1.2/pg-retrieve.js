const { Client } = require('pg')
const client = new Client({
  user: 'wbruno',
  password: '',
  host: 'localhost',
  port: 5432,
  database: 'livro_nodejs',
})
client.connect()
const params = ['CT-5555']
const sql = `SELECT * FROM stormtroopers WHERE name = $1::text`
client.query(sql, params)
  .then(result => {
    console.log(result.rows)
    process.exit()
  })
