/**
 * Definition list
 *
 * @param {Function} md - markdown-it instance
 * @returns {Function} - markdown-it rendering rules
 */
module.exports = function defList (md) {
  const { rules } = md.renderer

  rules.dl_open = () => '<dl class="app-definition-list">\n'
}
