import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { smart } from '../../../lib/filters/smart.js'

describe('smart filter', () => {
  it('Converts plain ASCII quotes into ‘smart’ typographic quotes', () => {
    const apostrophe = smart(`Her Majesty's Government`)
    const singleQuote = smart(`'Upstanding'`)
    const doubleQuote = smart(`"Outstanding"`)

    assert.equal(apostrophe, 'Her Majesty’s Government')
    assert.equal(singleQuote, '‘Upstanding’')
    assert.equal(doubleQuote, '“Outstanding”')
  })

  it('Converts multiple ASCII dashes into ‘smart’ typographic dashes', () => {
    const emDash = smart('---')
    const enDash = smart('--')

    assert.equal(emDash, '—')
    assert.equal(enDash, '–')
  })

  it('Converts 3 ASCII periods into ‘smart’ typographic ellipsis', () => {
    const result = smart('...')

    assert.equal(result, '…')
  })
})
