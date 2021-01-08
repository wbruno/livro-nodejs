const createError = require('http-errors')
const verifyId = (request, reply, done) => {
  const id = request.params.id
  if (!/^[0-9a-f]{24}$/.test(id)) {
    throw createError(422, 'invalid id')
  }
  done()
}
module.exports = verifyId
