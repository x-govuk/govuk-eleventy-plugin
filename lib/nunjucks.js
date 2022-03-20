const path = require('node:path')
const Nunjucks = require('nunjucks')

/**
 * Configure Nunjucks environment
 *
 * @see {@link https://mozilla.github.io/nunjucks/api.html#environment}
 *
 * @param {object} eleventyConfig - Eleventy config
 * @returns {Function} - Nunjucks environment
 */
module.exports = (eleventyConfig) => {
  const { input, includes, layouts } = eleventyConfig.dir
  const searchPaths = [
    ...(includes ? [path.join(input, includes)] : []),
    ...(layouts ? [path.join(input, layouts)] : []),
    './node_modules/govuk-eleventy-plugin',
    './node_modules/govuk-frontend',
    './node_modules/govuk-prototype-components'
  ]

  const nunjucks = new Nunjucks.Environment(
    new Nunjucks.FileSystemLoader(searchPaths), {
      autoescape: false,
      lstripBlocks: true,
      trimBlocks: true,
      noCache: process.env === 'development',
      watch: process.env === 'development'
    }
  )

  return nunjucks
}
