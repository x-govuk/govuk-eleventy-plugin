import assert from 'node:assert/strict'
import { describe, it } from 'node:test'

import { markdown } from '../../../lib/filters/markdown.js'

describe('markdown filter', () => {
  it('Converts Markdown string to HTML', () => {
    const result = markdown('**this** is _emphasis_')

    assert.equal(
      result,
      '<p class="govuk-body"><strong>this</strong> is <em>emphasis</em></p>\n'
    )
  })

  it('Converts Markdown string to HTML without paragraph wrap', () => {
    const result = markdown('**this** is _emphasis_', 'inline')

    assert.equal(result, '<strong>this</strong> is <em>emphasis</em>')
  })
})
