import createError from 'http-errors'
const verifyId = (request, response, next) => {
  const id = request.params.id
  if (!/^[0-9a-f]{24}$/.test(id)) {
    return next(createError(422, 'invalid id'))
  }
  next()
}
export default verifyId
