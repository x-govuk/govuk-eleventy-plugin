import test from 'ava'
import noOrphans from '../../../lib/filters/no-orphans.js'

test('Inserts non-breaking space between the last two words of a string', t => {
  const result = noOrphans('Department for Education')

  t.is(result, 'Department for&nbsp;Education')
})

test('Doesn’t insert non-breaking space if only one word', t => {
  const result = noOrphans('Government')

  t.is(result, 'Government')
})
