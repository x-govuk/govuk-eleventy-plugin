import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { normalise } from '../../lib/utils.js'

describe('Utility', () => {
  it('Normalises value provided to a filter', () => {
    const usesValue = normalise('Dollars', 'Pounds')
    const usesDefault = normalise(undefined, 'Pounds')

    assert.equal(usesValue, 'Dollars')
    assert.equal(usesDefault, 'Pounds')
  })
})
