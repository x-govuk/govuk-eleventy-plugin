const deepmerge = require('deepmerge')

/**
 * Default configuration values
 *
 * @see {@link https://x-govuk.github.io/govuk-eleventy-plugin/options/}
 */
const defaultConfig = {
  footer: {
    copyright: 'crown', // Crown copyright
    licence: 'ogl' // Open Government Licence v3.0
  },
  header: {
    homepageUrl: '/',
    organisationLogo: 'crown',
    organisationName: 'GOV.UK',
    productName: false
  },
  homeKey: 'Home',
  parentSite: false,
  pathPrefix: '/',
  search: false,
  url: false
}

module.exports = function (options) {
  return deepmerge(defaultConfig, options)
}
