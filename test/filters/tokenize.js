import assert from 'node:assert/strict'
import { describe, it } from 'node:test'

import { tokenize } from '../../src/filters/tokenize.js'

describe('tokenize filter', () => {
  it('Reduces size of a string by removing duplicate and common words', () => {
    const result = tokenize('The quick brown fox jumps over the lazy dog')

    assert.equal(result, 'quick brown fox jumps over lazy dog')
  })
})
