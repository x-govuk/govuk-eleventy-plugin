const { normalise } = require('../utils.js')

/**
 * Insert non-breaking space between the last two words of a string. This
 * prevents an orphaned word appearing by itself at the end of a paragraph.
 *
 * @example
 * noOrphans('Department for Education') // Department for&nbsp;Education
 *
 * @param {string} string - Value to transform
 * @return {string} - `string` with non-breaking space inserted
 */
module.exports = (string) => {
  string = normalise(string, '')

  const indexOfLastSpace = string.lastIndexOf(' ')

  // If there’s only one word, we don’t need this filter
  if (indexOfLastSpace === -1) {
    return string
  }

  const begin = string.substring(0, indexOfLastSpace)
  const end = string.substring(indexOfLastSpace + 1)
  return `${begin}&nbsp;${end}`
}
