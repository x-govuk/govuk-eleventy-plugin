const Nunjucks = require('nunjucks')

/**
 * Configure Nunjucks environment
 *
 * @see {@link https://mozilla.github.io/nunjucks/api.html#environment}
 *
 * @param {object} [options] - Nunjucks options
 * @returns {Function} - Nunjucks environment
 */
module.exports = (options = {}) => {
  const optionalViews = options.views || []
  const views = [
    './',
    './node_modules/govuk-eleventy-plugin',
    './node_modules/govuk-frontend',
    './node_modules/govuk-prototype-components'
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
