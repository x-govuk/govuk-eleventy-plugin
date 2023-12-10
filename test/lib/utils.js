const assert = require('assert/strict')
const { describe, it } = require('node:test')
const { ensureSlash, normalise } = require('../../lib/utils.js')

describe('Utility', () => {
  it('Ensures string ends with a slash', () => {
    assert.equal(ensureSlash('path'), 'path/')
    assert.equal(ensureSlash('path/'), 'path/')
  })

  it('Throws error ensuring anything not a string ends with a slash', () => {
    assert.throws(() => {
      ensureSlash({})
    }, {
      name: 'TypeError',
      message: 'Input must be a string'
    })
  })

  it('Normalises value provided to a filter', () => {
    const usesValue = normalise('Dollars', 'Pounds')
    const usesDefault = normalise(undefined, 'Pounds')

    assert.equal(usesValue, 'Dollars')
    assert.equal(usesDefault, 'Pounds')
  })
})
