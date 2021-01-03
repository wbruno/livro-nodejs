const { Client } = require('pg')
const client = new Client({
  user: 'wbruno',
  password: '',
  host: 'localhost',
  port: 5432,
  database: 'livro_nodejs',
})
client.connect()
const params = ['CT-5555', 'Fives', 2]
const sql = `INSERT INTO stormtroopers (name, nickname, id_patent)
  VALUES ($1::text, $2::text, $3::int)`
client.query(sql, params)
  .then(result => {
    console.log(result)
    process.exit()
  })
