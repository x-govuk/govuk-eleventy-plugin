/**
 * Render a table with `tabindex` to enable keyboard scrolling
 * @param {Function} md - markdown-it instance
 */
module.exports = function table(md) {
  const { rules } = md.renderer
  const defaultRenderer =
    rules.table_open ||
    function (tokens, idx, options, env, self) {
      return self.renderToken(tokens, idx, options)
    }

  rules.table_open = (tokens, idx, options, env, self) => {
    tokens[idx].attrPush(['tabindex', 0])
    return defaultRenderer(tokens, idx, options, env, self)
  }
}
