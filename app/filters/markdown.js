const { marked } = require('../../lib/marked.js')
const normalise = require('../../lib/nunjucks.js')

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

  if (value === 'inline') {
    return marked.parseInline(string)
  }

  return marked.parse(string)
}
