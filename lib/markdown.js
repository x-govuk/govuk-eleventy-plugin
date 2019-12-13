const markdown = require('markdown-it')

module.exports = (() => {
  const opts = {
    html: true,
    breaks: true,
    linkify: false,
    typographer: true
  }

  const plugins = [
    require('markdown-it-abbr'),
    require('markdown-it-deflist'),
    require('markdown-it-footnote'),
    require('markdown-it-ins'),
    require('markdown-it-mark'),
    require('markdown-it-sub'),
    require('markdown-it-sup'),
    require('markdown-it-table-of-contents')
  ]

  const parser = markdown(opts)

  if (plugins) {
    plugins.forEach(plugin => {
      if (Array.isArray(plugin)) {
        // Allow array of options to be passed.
        parser.use(...plugin)
      } else {
        parser.use(plugin)
      }
    })
  }

  return parser
})()
