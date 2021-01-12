import express from 'express'
import routes from './routes/index.js'
const app = express()
app.get('/', (req, res) => {
  res.send('Ola s')
})
export default app
