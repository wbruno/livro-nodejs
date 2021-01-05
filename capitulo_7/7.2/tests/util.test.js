const assert = require('assert')
const util = require('../util')
const cases = [
  { expected: 6, arr: [1,2,3] },
  { expected: 42, arr: [1,5,6,30] },
  { expected: 7, arr: [7,0,0,0] },
  { expected: -3, arr: [-1,-2] },
  { expected: 0, arr: [0,undefined] },
]
describe('#arraySum', () => {
  it.each(cases)('should sum the array %j', (test) => {
    const sum = util.arraySum(test.arr)
    assert.equal(sum, test.expected)
  })
})
describe('#guid', () => {
  it('should have a valid format', () => {
    var uuid = util.guid()
    console.log(uuid)
    assert.ok(/^[a-z|\d]{8}-[a-z|\d]{4}-[a-z|\d]{4}-[a-z|\d]{4}-[a-z|\d]{12}$/.test(uuid))
  })
  it('should generate uniques uuids', () => {
    var uuid1 = util.guid()
    var uuid2 = util.guid()
    var uuid3 = util.guid()
    var uuid4 = util.guid()
    assert.notEqual(uuid1, uuid2)
    assert.notEqual(uuid2, uuid3)
    assert.notEqual(uuid3, uuid4)
    assert.notEqual(uuid1, uuid4)
  })
})

describe('isBiggerThan', () => {
  it('should return [3,4,5] from input [1,2,3,4,5], 3', () => {
     assert.deepEqual(util.isBiggerThan([1,2,3,4,5], 3), [3,4,5])
  })
  it('should return [] from input [1,2,3,4,5], 10', () => {
     assert.deepEqual(util.isBiggerThan([1,2,3,4,5], 10), [])
  })
})
