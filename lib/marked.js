const GovukHTMLRenderer = require('govuk-markdown')
const { marked } = require('marked')
const extensions = require('./marked/extensions/index.js')
const typographer = require('./marked/typographer.js')

marked.setOptions({
  renderer: new GovukHTMLRenderer({
    headingsStartWith: 'l'
  }),
  smartypants: true,
  walkTokens: typographer
})

marked.use({
  extensions
})

module.exports.marked = marked
