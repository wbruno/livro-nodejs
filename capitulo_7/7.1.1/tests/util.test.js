const assert = require('node:assert')
const test = require('node:test')
const util = require('../util')

test('#uti.arraySum', async (context) => {
    const sum = util.arraySum([1,2,3])
    assert.equal(sum, 6)
})
test('#uti.arraySum negative values', async (context) => {
    const sum = util.arraySum([0,0,-1,2])
    assert.equal(sum, 1)
})
test('#uti.arraySum empty array', async (context) => {
    const sum = util.arraySum([])
    assert.equal(sum, 0)
})
