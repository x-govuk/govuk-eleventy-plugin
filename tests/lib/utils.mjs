import test from 'ava'
import { ensureSlash, normalise } from '../../lib/utils.js'

test('Ensures string ends with a slash', t => {
  t.is(ensureSlash('path'), 'path/')
  t.is(ensureSlash('path/'), 'path/')
})

test('Normalises value provided to a filter', t => {
  const usesValue = normalise('Dollars', 'Pounds')
  const usesDefault = normalise(undefined, 'Pounds')

  t.is(usesValue, 'Dollars')
  t.is(usesDefault, 'Pounds')
})
