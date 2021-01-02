const AppController = {
  notFound(request, response, next) {
    var err = new Error('Not Found')
    err.status = 404
    next(err)
  },
  handleError(err, request, response, next) {
    if (err.status !== 404) console.log(err.stack)
    response.status(err.status || 500).json({ err: err.message })
  }
}
export default AppController
