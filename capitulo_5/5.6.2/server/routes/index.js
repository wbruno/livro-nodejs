import { Router } from 'express'
import trooperRoutes from './trooper.js'
import createError from 'http-errors'
import jwt from 'jwt-simple'
import moment from 'moment'
import config from 'config'
const routes = new Router()
routes.get('/', (req, res) => res.send('Ola s'))
routes.post('/login', (request, response, next) => {
  const { username, password } = request.body
  if (username === 'rebels' && password === '1138') {
    const token = jwt.encode({
        user: username,
        exp: moment().add(7, 'days').valueOf()
    }, config.get('jwtTokenSecret'))
    return response.json({ token })
  }
  next(createError(401, 'Unauthorized'))
})
const verifyJwt = (request, response, next) => {
  const token = request.query.token || request.headers['x-token'];
  if (!token) {
    return next(createError(401, 'Unauthorized'))
  }
  try {
    const decoded = jwt.decode(token, config.get('jwtTokenSecret'))
    const isExpired = moment(decoded.exp).isBefore(new Date())
    if(isExpired) {
      next(createError(401, 'Unauthorized'))
    } else {
      request.user = decoded.user
      next()
    }
  } catch(err) {
    err.status = 401
    return next(err)
  }
}
routes.use('/troopers', verifyJwt, trooperRoutes)
export default routes
