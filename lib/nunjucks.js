const fs = require('node:fs')
const path = require('node:path')
const Nunjucks = require('nunjucks')

/**
 * If there is a version conflict between a govuk-eleventy-plugin dependency
 * and the host project's dependencies, npm will include the expected version
 * in a nested node_modules folder.
 *
 * @param {string} module
 * @return {string}
 */
const resolveNpmModule = (module) => {
  const localPath = `./node_modules/@x-govuk/govuk-eleventy-plugin/node_modules/${module}`
  return fs.existsSync(localPath) ? localPath : `./node_modules/${module}`
}

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
    './node_modules/@x-govuk/govuk-eleventy-plugin',
    resolveNpmModule('govuk-frontend'),
    resolveNpmModule('@x-govuk/govuk-prototype-components'),
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
