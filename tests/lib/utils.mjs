import test from 'ava'
import { normalise } from '../../lib/utils.js'

test('Normalises value provided to a filter', t => {
  const usesValue = normalise('Dollars', 'Pounds')
  const usesDefault = normalise(undefined, 'Pounds')

  t.is(usesValue, 'Dollars')
  t.is(usesDefault, 'Pounds')
})
