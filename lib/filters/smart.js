const { normalise } = require('../utils.js')
const smartypants = require('smartypants')

/**
 * Convert ASCII punctuation characters into ‘smart’ typographic equivalents.
 *
 * @example
 * smart('Her Majesty\'s Government') // Her Majesty’s Government
 *
 * @param {string} string - Value to transform
 * @return {string} - `string` with smart typographic punctuation
 */
module.exports = (string) => {
  string = normalise(string, '')

  return smartypants.smartypantsu(string, 2)
}
