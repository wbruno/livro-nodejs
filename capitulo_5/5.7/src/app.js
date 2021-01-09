require('dotenv').config()
const controller = require('./controller/Stormtrooper')
const verifyId =  require('./hook/verifyId')
const schema = require('./schema/stormtrooper')
const fastify = require('fastify')()
fastify.get('/troopers', {
  handler: controller.list,
  schema: {
    response: { 200: { type: 'array', items: schema.body } }
  }
})
fastify.post('/troopers', {
  schema: {
    body: schema.body,
    response: { 201: schema.body },
    params: schema.params
  },
  handler: controller.create
})
fastify.get('/troopers/:id', {
  schema: {
    response: { 200: schema.body },
    params: schema.params
  },
  onRequest: verifyId,
  handler: controller.byId
})
fastify.put('/troopers/:id', {
  schema: {
    body: schema.body,
    params: schema.params
  },
  onRequest: verifyId,
  handler: controller.updateById
})
fastify.delete('/troopers/:id', {
  schema: {
    params: schema.params
  },
  onRequest: verifyId,
  handler: controller.deleteById
})
module.exports = fastify
