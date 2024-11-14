const assert = require('node:assert/strict')
const { describe, it } = require('node:test')

const noOrphans = require('../../../lib/filters/no-orphans.js')

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
