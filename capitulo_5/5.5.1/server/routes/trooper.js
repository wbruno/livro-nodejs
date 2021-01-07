import { Router } from 'express'
import createError from 'http-errors'
import controller from '../controller/Stormtrooper.js'
const trooperRoutes = new Router()

const verifyId = (request, response, next) => {
  const id = request.params.id
  if (!/^[0-9a-f]{24}$/.test(id)) {
    return next(createError(422, 'invalid id'))
  }
  next()
}

trooperRoutes.get('/', controller.list)
trooperRoutes.get('/:id', verifyId, controller.byId)
trooperRoutes.post('/', controller.create)
trooperRoutes.put('/:id', verifyId, controller.updateById)
trooperRoutes.delete('/:id', verifyId, controller.deleteById)

export default trooperRoutes
