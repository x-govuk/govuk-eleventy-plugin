import test from 'ava'
import tokenize from '../../../lib/filters/tokenize.js'

test('Reduces size of a string by removing duplicate and common words', t => {
  const result = tokenize('The quick brown fox jumps over the lazy dog')

  t.is(result, 'quick brown fox jumps over lazy dog')
})
