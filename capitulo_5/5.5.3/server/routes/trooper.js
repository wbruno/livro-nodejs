import { Router } from 'express'
import createError from 'http-errors'
import controller from '../controller/Stormtrooper.js'
import { getAsync } from '../config/redis.js'
const trooperRoutes = new Router()
const verifyId = (request, response, next) => {
  const id = request.params.id
  if (!/^[0-9]+$/.test(id)) {
    return next(createError(422, 'invalid id'))
  }
  next()
}
const fromCache = (request, response, next) => {
  getAsync(`trooper:${request.params.id}`)
    .then(result => {
      if (!result) return next()
      response.send(JSON.parse(result))
    })
    .catch(_ => next())
}
trooperRoutes.get('/', controller.list)
trooperRoutes.get('/:id', verifyId, fromCache, controller.byId)
trooperRoutes.post('/', controller.create)
trooperRoutes.put('/:id', verifyId, controller.updateById)
trooperRoutes.delete('/:id', verifyId, controller.deleteById)
export default trooperRoutes
