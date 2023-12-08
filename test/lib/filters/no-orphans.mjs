import { strict as assert } from 'node:assert'
import { describe, it } from 'node:test'
import noOrphans from '../../../lib/filters/no-orphans.js'

describe('noOrphans filter', () => {
  it('Inserts non-breaking space between last two words of a string', () => {
    const result = noOrphans('Department for Education')

    assert.equal(result, 'Department for&nbsp;Education')
  })

  it('Doesn’t insert non-breaking space if only one word', () => {
    const result = noOrphans('Government')

    assert.equal(result, 'Government')
  })
})