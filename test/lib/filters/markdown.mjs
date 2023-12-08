import { strict as assert } from 'node:assert'
import { describe, it } from 'node:test'
import markdown from '../../../lib/filters/markdown.js'

describe('markdown filter', () => {
  it('Converts Markdown string to HTML', t => {
    const result = markdown('**this** is _emphasis_')

    assert.equal(result, '<p class="govuk-body"><strong>this</strong> is <em>emphasis</em></p>\n')
  })

  it('Converts Markdown string to HTML without paragraph wrap', t => {
    const result = markdown('**this** is _emphasis_', 'inline')

    assert.equal(result, '<strong>this</strong> is <em>emphasis</em>')
  })
})
