const MarkdownIt = require('markdown-it')
const anchor = require('markdown-it-anchor')

/**
 * Configure markdown-it
 * @see {@link https://markdown-it.github.io/markdown-it/}
 * @param {object} [options] - Plugin options
 * @returns {Function} markdown-it instance
 */
module.exports = (options = {}) => {
  const opts = {
    breaks: true,
    highlight: require('markdown-it-govuk/highlight'),
    html: true,
    linkify: false,
    typographer: true
  }

  const md = new MarkdownIt(opts)
    .use(require('markdown-it-govuk'), {
      headingsStartWith: 'xl',
      calvert: true
    })
    .use(require('markdown-it-abbr'))
    .use(anchor, {
      permalink: options.headingPermalinks
        ? anchor.permalink.headerLink({
            class: 'app-link--heading',
            safariReaderFix: true
          })
        : false
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
    .use(require('./markdown-it/table.js'))
    .use(require('markdown-it-table-of-contents'), {
      includeLevel: [2, 3]
    })
    .use(require('./markdown-it/table-of-contents.js'))

  return md
}
