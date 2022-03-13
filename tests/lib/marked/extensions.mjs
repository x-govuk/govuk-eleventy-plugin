import test from 'ava'
import { marked } from '../../../lib/marked.js'

test('Renders image figure with caption', t => {
  const result = marked.parse('![Alt](/image.jpg "Caption")')

  t.is(result, '<figure>\n  <img src="/image.jpg" alt="Alt">\n  <figcaption>\n    <p class="govuk-body">Caption</p>\n\n  </figcaption>\n</figure>\n')
})

test('Renders highlighted text', t => {
  const result = marked.parse('==highlighted==')

  t.is(result, '<p class="govuk-body"><mark>highlighted</mark></p>\n')
})

test('Renders inserted text', t => {
  const result = marked.parse('++inserted++')

  t.is(result, '<p class="govuk-body"><ins>inserted</ins></p>\n')
})

test('Renders subscript text', t => {
  const result = marked.parse('~subscript~')

  t.is(result, '<p class="govuk-body"><sub>subscript</sub></p>\n')
})

test('Renders superscript text', t => {
  const result = marked.parse('^superscript^')

  t.is(result, '<p class="govuk-body"><sup>superscript</sup></p>\n')
})
