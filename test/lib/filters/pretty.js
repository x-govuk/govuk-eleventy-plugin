const assert = require('assert/strict')
const { describe, it } = require('node:test')
const pretty = require('../../../lib/filters/pretty.js')

describe('pretty filter', () => {
  it('Removes index.html from a string', () => {
    const result = pretty('/page/index.html')

    assert.equal(result, '/page/')
  })

  it('Removes .html from a string', () => {
    const result = pretty('/page/home.html')

    assert.equal(result, '/page/home')
  })
})
