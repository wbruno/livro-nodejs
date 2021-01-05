import { Router } from 'express'
import trooperRoutes from './trooper.js'
const routes = new Router()

routes.get('/', (req, res) => {
  res.send('Ola s')
})

routes.get('/favicon.ico', (request, response, next) => {
  response.writeHead(200, {'Content-Type': 'image/x-icon'})
  response.end('')
})

routes.use('/troopers', trooperRoutes)

export default routes
