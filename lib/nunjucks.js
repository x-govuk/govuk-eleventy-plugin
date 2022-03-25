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
  const { includes, layouts } = eleventyConfig.dir

  // eleventyConfig does not provide the default value for dir.input
  // https://github.com/11ty/eleventy/blob/36713b3af81b08530fac532ceef24f5dde8acb36/src/defaultConfig.js#L61
  const input = eleventyConfig.dir.input || '.'

  const searchPaths = [
    './node_modules/govuk-eleventy-plugin',
    './node_modules/govuk-frontend',
    './node_modules/govuk-prototype-components',
    ...(includes ? [path.join(input, includes)] : []),
    ...(layouts ? [path.join(input, layouts)] : []),
    ...input
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
