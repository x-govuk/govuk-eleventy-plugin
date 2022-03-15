const md = require('markdown-it')
const anchor = require('markdown-it-anchor')

module.exports = (() => {
  const opts = {
    breaks: true,
    highlight: require('markdown-it-govuk/highlight'),
    html: true,
    linkify: false,
    typographer: true
  }

  const parser = md(opts)

  parser
    .use(require('markdown-it-govuk'))
    .use(require('markdown-it-abbr'))
    .use(anchor, {
      permalink: anchor.permalink.headerLink({
        class: 'govuk-link govuk-link--no-underline govuk-link--text-colour'
      })
    })
    .use(require('markdown-it-deflist'))
    .use(require('./markdown-it/deflist.js'))
    .use(require('markdown-it-footnote'))
    .use(require('./markdown-it/footnote.js'))
    .use(require('markdown-it-ins'))
    .use(require('markdown-it-image-figures'), {
      figcaption: true
    })
    .use(require('markdown-it-mark'))
    .use(require('markdown-it-sub'))
    .use(require('markdown-it-sup'))
    .use(require('markdown-it-table-of-contents'), {
      includeLevel: [2, 3]
    })
    .use(require('./markdown-it/table-of-contents.js'))

  return parser
})()
