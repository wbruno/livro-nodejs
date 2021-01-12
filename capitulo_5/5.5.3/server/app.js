import express from 'express'
import routes from './routes/index.js'
import AppController from './controller/App.js'
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use((request, response, next) => {
  response.header('Access-Control-Allow-Origin', '*')
  response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})
app.use(routes)
app.use(AppController.notFound)
app.use(AppController.handleError)
export default app
