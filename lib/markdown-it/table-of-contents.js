/**
 * Table of contents
 *
 * @param {Function} md - markdown-it instance
 * @returns {Function} - markdown-it rendering rules
 */
module.exports = function contentsList (md) {
  const { rules } = md.renderer

  rules.toc_open = () => `<nav class="app-contents-list" aria-label="Contents" role="navigation">
    <h2 class="app-contents-list__title">Contents</h2>\n`

  rules.toc_close = () => '</nav>'
}
