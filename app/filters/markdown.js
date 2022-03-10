const GovukHTMLRenderer = require('govuk-markdown')
const { marked } = require('marked')
const normalise = require('../../lib/nunjucks.js')
const typographer = require('../../lib/marked/typographer.js')

/**
 * Convert Markdown into GOV.UK Frontend-compliant HTML
 *
 * @param {String} string Markdown
 * @param {String} value If `inline`, renders HTML without paragraph tags
 * @return {String} HTML
 *
 */
module.exports = (string, value) => {
  string = normalise(string, '')

  marked.setOptions({
    smartypants: true,
    renderer: new GovukHTMLRenderer()
  })

  marked.use(typographer);

  if (value === 'inline') {
    return marked.parseInline(string)
  }

  return marked.parse(string)
}
