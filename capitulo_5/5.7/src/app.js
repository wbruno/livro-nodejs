require('dotenv').config()
const controller = require('./controller/Stormtrooper')
const verifyId =  require('./hook/verifyId')
const fastify = require('fastify')()
fastify.get('/troopers', controller.list)
fastify.post('/troopers', controller.create)
fastify.route({
  method: 'GET',
  path: '/troopers/:id',
  onRequest: verifyId,
  handler: controller.byId
})
fastify.route({
  method: 'PUT',
  path: '/troopers/:id',
  onRequest: verifyId,
  handler: controller.updateById
})
fastify.route({
  method: 'DELETE',
  path: '/troopers/:id',
  onRequest: verifyId,
  handler: controller.deleteById
})
module.exports = fastify
