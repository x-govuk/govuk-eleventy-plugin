var changeCase = require('change-case')

/**
 * Convert a string to sentence case
 *
 * @param {String} str String
 * @param {String} value Transformation
 * @return {String} Sentence cased string
 *
 */
module.exports = (str, value) => {
  if (str) {
    value = value || 'sentenceCase'
    return changeCase[value](str)
  }
}
