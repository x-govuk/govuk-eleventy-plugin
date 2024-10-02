/**
 * Render a definition list
 * @param {Function} md - markdown-it instance
 */
export function defListRules(md) {
  const { rules } = md.renderer

  rules.dl_open = () => '<dl class="app-definition-list">\n'
}
