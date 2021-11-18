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
    .use(require('markdown-it-image-figures'), {
      figcaption: true
    })
    .use(require('markdown-it-mark'))
    .use(require('markdown-it-sub'))
    .use(require('markdown-it-sup'))
    .use(require('markdown-it-table-of-contents'), {
      containerHeaderHtml: '<h2 class="govuk-heading-l" id="contents">Contents</h2>',
      includeLevel: [2, 3]
    })

  return parser
})()
