import test from 'ava'
import utils from '../../lib/utils.js'

test('Normalises value provided to a filter', t => {
  const usesValue = utils('Dollars', 'Pounds')
  const usesDefault = utils(undefined, 'Pounds')

  t.is(usesValue, 'Dollars')
  t.is(usesDefault, 'Pounds')
})
