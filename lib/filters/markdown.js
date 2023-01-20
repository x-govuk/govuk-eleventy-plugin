const md = require('../markdown-it.js')()
const { normalise } = require('../utils.js')

/**
 * Convert Markdown into GOV.UK Frontend-compliant HTML
 *
 * @param {string} string - Markdown string
 * @param {string} value - If `inline`, renders HTML without paragraph tags
 * @return {string} - HTML
 *
 */
module.exports = (string, value) => {
  string = normalise(string, '')

  if (value === 'inline') {
    return md.renderInline(string)
  }

  return md.render(string)
}
