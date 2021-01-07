import createError from 'http-errors'
const handleNotFound = (result) => {
  if (!result) {
    throw createError(404, 'trooper not found')
  }
  return result
}
export { handleNotFound }
