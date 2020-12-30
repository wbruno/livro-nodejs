import express from 'express'
const app = express()

app.get('/', (req, res) => {
  res.send('Ola s')
})

app.listen(3000)
