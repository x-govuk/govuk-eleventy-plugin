/**
 * Responsive tables
 *
 * Add `tabindex` so that table scrolling can be controlled via the keyboard.
 *
 * @param {Function} md - markdown-it instance
 * @returns {Function} - markdown-it rendering rules
 */
module.exports = function table (md) {
  const { rules } = md.renderer
  const defaultRenderer = rules.table_open || function (tokens, idx, options, env, self) {
    return self.renderToken(tokens, idx, options)
  }

  rules.table_open = (tokens, idx, options, env, self) => {
    tokens[idx].attrPush(['tabindex', 0])
    return defaultRenderer(tokens, idx, options, env, self)
  }
}
