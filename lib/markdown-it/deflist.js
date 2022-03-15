/**
 * Definition list
 *
 * @param {function} md markdown-it instance
 * @returns {function} markdown-it rendering rules
 */
module.exports = function defList (md) {
  const { rules } = md.renderer

  rules.dl_open = () => '<dl class="app-definition-list">\n'
}
