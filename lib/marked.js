const GovukHTMLRenderer = require('govuk-markdown')
const { marked } = require('marked')
const typographer = require('./marked/typographer.js')

marked.setOptions({
  renderer: new GovukHTMLRenderer(),
  smartypants: true
})

marked.use(typographer);

module.exports.marked = marked
