import { Router } from 'express'
import controller from '../controller/Stormtrooper.js'
import verifyId from '../middleware/verifyId.js'
const trooperRoutes = new Router()

trooperRoutes.get('/', controller.list)
trooperRoutes.get('/:id', verifyId, controller.byId)
trooperRoutes.post('/', controller.create)
trooperRoutes.put('/:id', verifyId, controller.updateById)
trooperRoutes.delete('/:id', verifyId, controller.deleteById)

export default trooperRoutes
