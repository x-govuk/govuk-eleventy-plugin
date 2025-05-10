import { smartypantsu } from 'smartypants'

import { normalise } from '../utils.js'

/**
 * Convert ASCII punctuation characters into ‘smart’ typographic equivalents
 *
 * @param {string} string - Value to transform
 * @returns {string} `string` with smart typographic punctuation
 * @example
 * smart('Her Majesty\'s Government') // Her Majesty’s Government
 */
export function smart(string) {
  string = normalise(string, '')

  return smartypantsu(string, 2)
}
