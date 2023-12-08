import { strict as assert } from 'node:assert'
import { describe, it } from 'node:test'
import { ensureSlash, normalise } from '../../lib/utils.js'

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
