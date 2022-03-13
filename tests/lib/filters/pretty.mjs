import test from 'ava'
import pretty from '../../../lib/filters/pretty.js'

test('Remove index.html from a string', t => {
  const result = pretty('/page/index.html')

  t.is(result, '/page/')
})

test('Remove .html from a string', t => {
  const result = pretty('/page/home.html')

  t.is(result, '/page/home')
})
