import test from 'ava'
import markdown from '../../../lib/filters/markdown.js'

test('Converts Markdown string to HTML', t => {
  const result = markdown('**this** is _emphasis_')

  t.is(result, '<p class="govuk-body"><strong>this</strong> is <em>emphasis</em></p>\n')
})

test('Converts Markdown string to HTML without paragraph wrap', t => {
  const result = markdown('**this** is _emphasis_', 'inline')

  t.is(result, '<strong>this</strong> is <em>emphasis</em>')
})
