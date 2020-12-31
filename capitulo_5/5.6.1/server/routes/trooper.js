import { Router } from 'express'
import controller from '../controller/Stormtrooper.js'
const trooperRoutes = new Router()

trooperRoutes.get('/', controller.list)
trooperRoutes.get('/:id', controller.byId)
trooperRoutes.post('/', controller.create)
trooperRoutes.put('/:id', controller.updateById)
trooperRoutes.delete('/:id', controller.deleteById)

export default trooperRoutes
