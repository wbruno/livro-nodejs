import verifyId from './verifyId.js'
import httpErrors from 'http-errors'
let request
let response
let next
beforeEach(() => {
  request = {}
  response = {}
  next = () => {}
})
describe('#verifyId', () => {
  it('invalid id', () => {
    next = (err) => {
      expect(err).toBeDefined()
      expect(err).toBeInstanceOf(Error)
      expect(err).toBeInstanceOf(httpErrors.HttpError)
      expect(err.message).toBe('invalid id')
      expect(err.status).toBe(422)
      expect(err.stack).toBeDefined()
    }
    request.params = { id: '5ff' }
    verifyId(request, response, next)
  })
  it('valid id', () => {
    next = (err) => {
      expect(err).toBe(undefined)
    }
    request.params = { id: '5ff30c2e7952ec31de6b8e1a' }
    verifyId(request, response, next)
  })
})
