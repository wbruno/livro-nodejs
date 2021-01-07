import express from 'express'
import trooperRoutes from './trooper.js'
import checkRoutes from './check.js'
const routes = new express.Router()
routes.get('/', (req, res) => {
  res.send('Ola s')
})
routes.use('/troopers', trooperRoutes)
routes.use('/checks', checkRoutes)
export default routes
