const GovukHTMLRenderer = require('govuk-markdown')
const { marked } = require('marked')
const figure = require('./marked/figure.js')
const highlighted = require('./marked/highlighted.js')
const inserted = require('./marked/inserted.js')
const superscript = require('./marked/superscript.js')
const subscript = require('./marked/subscript.js')
const typographer = require('./marked/typographer.js')

marked.setOptions({
  renderer: new GovukHTMLRenderer(),
  smartypants: true
})

marked.use({
  extensions: [
    figure,
    highlighted,
    inserted,
    subscript,
    superscript
  ],
  walkTokens: typographer
})

module.exports.marked = marked
