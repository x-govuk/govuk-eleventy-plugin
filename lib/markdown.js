const markdown = require('markdown-it')

module.exports = (() => {
  const opts = {
    html: true,
    breaks: true,
    linkify: false,
    typographer: true
  }

  const parser = markdown(opts)

  parser
    .use(require('markdown-it-abbr'))
    .use(require('markdown-it-deflist'))
    .use(require('markdown-it-footnote'))
    .use(require('markdown-it-ins'))
    .use(require('markdown-it-mark'))
    .use(require('markdown-it-sub'))
    .use(require('markdown-it-sup'))
    .use(require('markdown-it-table-of-contents'))

  return parser
})()
