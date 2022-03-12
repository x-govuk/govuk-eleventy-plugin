const figure = require('./figure.js')
const { footnote, footnotes, footnoteReference } = require('./footnotes.js')
const highlighted = require('./highlighted.js')
const inserted = require('./inserted.js')
const superscript = require('./superscript.js')
const subscript = require('./subscript.js')

module.exports = [
  figure,
  footnote,
  footnotes,
  footnoteReference,
  highlighted,
  inserted,
  subscript,
  superscript
]
