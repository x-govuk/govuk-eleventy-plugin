const assert = require('assert/strict')
const { describe, it } = require('node:test')
const markdown = require('../../../lib/filters/markdown.js')

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
