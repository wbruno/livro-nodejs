import { handleNotFound } from './util'
describe('#handleNotFound', () => {
  it('when result=null, should throw not found', () => {
    const result = null
    expect(() => {
      handleNotFound(result)
    }).toThrowError('trooper not found')
    try {
      handleNotFound(result)
    } catch(err) {
      expect(err.status).toBe(404)
    }
  })
  it('when result={}, just return', () => {
    const result = {}
    const ret = handleNotFound(result)
    expect(result).toBe(ret)
  })
})
