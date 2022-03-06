import test from 'ava'
import noOrphans from '../../../govuk/filters/no-orphans.js'

test('Inserts non-breaking space between the last two words of a string', t => {
  const result = noOrphans('Department for Education')

  t.is(result, 'Department for&nbsp;Education')
})
