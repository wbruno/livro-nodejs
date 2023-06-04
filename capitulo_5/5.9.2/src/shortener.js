const debug = require('debug')('wbruno:shortener')
const repository = require('./repository')

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Credentials': true
}

const list = (event) => {
  const query = event.queryStringParameters || {}

  return repository.list(query, query.size).then((result) => {
    return { statusCode: 200, headers, body: JSON.stringify(result) }
  })
}

const byId = (event) => {
  const params = event.pathParameters

  return repository
    .byId(params.id)
    .then((result) => {
      if (!result?.link) {
        throw new Error('not found')
      }
      return result
    })
    .then((result) => {
      return { statusCode: 200, headers, body: JSON.stringify(result) }
    })
    .catch((err) => {
      return { statusCode: 404, body: JSON.stringify(err) }
    })
}

const create = (event) => {
  const body = JSON.parse(event.body || '{}')

  debug('create', body)

  return repository.put(body).then((_) => {
    const result = { message: 'created' }
    return { statusCode: 201, headers, body: JSON.stringify(result) }
  })
}

const update = (event) => {
  const params = event.pathParameters
  const body = JSON.parse(event.body || '{}')

  debug('update', body)

  return repository.put(body, params.id).then((_) => {
    const result = { message: 'updated' }
    return { statusCode: 200, headers, body: JSON.stringify(result) }
  })
}

const remove = (event) => {
  const params = event.pathParameters

  debug('delete', params.id)

  return repository.delete(params.id).then(() => {
    return { statusCode: 200, headers, body: '' }
  })
}

module.exports = {
    list, byId, create, update, remove
}