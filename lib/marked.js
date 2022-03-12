const GovukHTMLRenderer = require('govuk-markdown')
const { marked } = require('marked')
const extensions = require('./marked/extensions/index.js')
const typographer = require('./marked/typographer.js')

marked.setOptions({
  renderer: new GovukHTMLRenderer(),
  smartypants: true
})

marked.use({
  extensions,
  walkTokens: typographer
})

module.exports.marked = marked
