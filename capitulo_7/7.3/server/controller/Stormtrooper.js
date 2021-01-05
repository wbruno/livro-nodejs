import repository from '../repository/Stormtrooper.js'
import { handleNotFound } from './util'
const Stormtrooper = {
  list(request, response, next) {
    repository.list()
      .then(result => response.json(result))
      .catch(next)
  },
  byId(request, response, next) {
    repository.byId(request.params.id)
      .then(handleNotFound)
      .then(result => response.json(result))
      .catch(next)
  },
  create(request, response, next) {
    repository.create(request.body)
      .then(result => response.status(201).json(result))
      .catch(next)
  },
  updateById(request, response, next) {
    repository.updateById(request.params.id, request.body)
      .then(result => response.json(result))
      .catch(next)
  },
  deleteById(request, response, next) {
    repository.deleteById(request.params.id)
      .then(_ => response.sendStatus(204))
      .catch(next)
  }
}
export default Stormtrooper
