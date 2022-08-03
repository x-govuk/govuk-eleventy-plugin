import test from 'ava'
import smart from '../../../lib/filters/smart.js'

test('Convert plain ASCII quotes into ‘smart’ typographic quotes', t => {
  const apostrophe = smart('Her Majesty\'s Government')
  const singleQuote = smart('\'Upstanding\'')
  const doubleQuote = smart('"Outstanding"')

  t.is(apostrophe, 'Her Majesty’s Government')
  t.is(singleQuote, '‘Upstanding’')
  t.is(doubleQuote, '“Outstanding”')
})

test('Convert multiple ASCII dashes into ‘smart’ typographic dashes', t => {
  const emDash = smart('---')
  const enDash = smart('--')

  t.is(emDash, '—')
  t.is(enDash, '–')
})

test('Convert 3 ASCII periods into ‘smart’ typographic ellipsis', t => {
  const result = smart('...')

  t.is(result, '…')
})
