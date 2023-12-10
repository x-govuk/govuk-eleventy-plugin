const { normalise } = require('../utils.js')
const smartypants = require('smartypants')

/**
 * Convert ASCII punctuation characters into ‘smart’ typographic equivalents
 * @param {string} string - Value to transform
 * @returns {string} `string` with smart typographic punctuation
 * @example
 * smart('Her Majesty\'s Government') // Her Majesty’s Government
 */
module.exports = (string) => {
  string = normalise(string, '')

  return smartypants.smartypantsu(string, 2)
}
