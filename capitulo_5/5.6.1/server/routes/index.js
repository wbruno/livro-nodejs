import { Router } from 'express'
import trooperRoutes from './trooper.js'
import passport from 'passport'
import { BasicStrategy } from 'passport-http'
const routes = new Router()
routes.get('/', (req, res) => res.send('Ola s'))
routes.use(passport.initialize())
passport.use(
  new BasicStrategy((username, password, done) => {
    if (username.valueOf() === 'rebels' && password.valueOf() === '1138') {
      return done(null, true)
    }
    return done(null, false)
  })
)
routes.use('/troopers', passport.authenticate('basic', { session: false }), trooperRoutes)
export default routes
