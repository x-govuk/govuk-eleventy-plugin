const assert = require('assert/strict')
const { describe, it } = require('node:test')
const { normalise } = require('../../lib/utils.js')

describe('Utility', () => {
  it('Normalises value provided to a filter', () => {
    const usesValue = normalise('Dollars', 'Pounds')
    const usesDefault = normalise(undefined, 'Pounds')

    assert.equal(usesValue, 'Dollars')
    assert.equal(usesDefault, 'Pounds')
  })
})
