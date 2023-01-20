/**
  * Ensure string ends with a slash
  *
  * @param {string} string - String
  * @return {string} String ending with a `/`
  */
const ensureSlash = (string) => {
  if (typeof string !== 'string') {
    throw new TypeError('Input must be a string')
  }

  if (string.charAt(string.length - 1) === '/') {
    return string
  }

  return `${string}/`
}

/**
 * Normalise value provided to a filter. Checks that a given value exists
 * before performing a transformation.
 *
 * @param {*} value - Input value
 * @param {*} defaultValue - Value to fallback to if no value given
 * @returns defaultValue
 */
const normalise = (value, defaultValue) => {
  if (value === null || value === undefined || value === false) {
    return defaultValue
  }

  return value
}

module.exports = {
  ensureSlash,
  normalise
}
