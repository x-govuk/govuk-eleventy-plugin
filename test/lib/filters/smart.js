const assert = require('assert/strict')
const { describe, it } = require('node:test')
const smart = require('../../../lib/filters/smart.js')

describe('smart filter', () => {
  it('Converts plain ASCII quotes into ‘smart’ typographic quotes', t => {
    const apostrophe = smart('Her Majesty\'s Government')
    const singleQuote = smart('\'Upstanding\'')
    const doubleQuote = smart('"Outstanding"')

    assert.equal(apostrophe, 'Her Majesty’s Government')
    assert.equal(singleQuote, '‘Upstanding’')
    assert.equal(doubleQuote, '“Outstanding”')
  })

  it('Converts multiple ASCII dashes into ‘smart’ typographic dashes', t => {
    const emDash = smart('---')
    const enDash = smart('--')

    assert.equal(emDash, '—')
    assert.equal(enDash, '–')
  })

  it('Converts 3 ASCII periods into ‘smart’ typographic ellipsis', t => {
    const result = smart('...')

    assert.equal(result, '…')
  })
})
