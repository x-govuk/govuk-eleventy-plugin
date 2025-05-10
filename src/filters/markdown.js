import { md } from '../markdown-it.js'
import { normalise } from '../utils.js'

/**
 * Convert Markdown into GOV.UK Frontend-compliant HTML
 *
 * @param {string} string - Markdown string
 * @param {string} value - If `inline`, renders HTML without paragraph tags
 * @returns {string} HTML
 */
export function markdown(string, value) {
  string = normalise(string, '')

  if (value === 'inline') {
    return md().renderInline(string)
  }

  return md().render(string)
}
