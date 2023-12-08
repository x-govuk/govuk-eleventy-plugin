import { strict as assert } from 'node:assert'
import { describe, it } from 'node:test'
import pretty from '../../../lib/filters/pretty.js'

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
