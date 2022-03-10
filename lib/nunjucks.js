const path = require('node:path')
const Nunjucks = require('nunjucks')

module.exports = (options = {}) => {
  const root = path.join(__dirname, '../')
  const optionalViews = options.views || []
  const views = [
    root,
    'node_modules/govuk-eleventy-plugin',
    'node_modules/govuk-frontend',
    'node_modules/govuk-prototype-components'
  ].concat(optionalViews)

  const nunjucks = new Nunjucks.Environment(
    new Nunjucks.FileSystemLoader(views), {
      autoescape: false,
      lstripBlocks: true,
      trimBlocks: true,
      noCache: process.env === 'development',
      watch: process.env === 'development'
    }
  )

  return nunjucks
}
