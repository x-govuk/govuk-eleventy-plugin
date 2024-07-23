const deepmerge = require('deepmerge')

/**
 * Default option values
 * @see {@link https://x-govuk.github.io/govuk-eleventy-plugin/options/}
 */
const defaultOptions = {
  brandColour: false,
  themeColour: '#0b0c0c', // $govuk-text-colour
  fontFamily: false,
  icons: {
    mask: '/assets/images/govuk-mask-icon.svg',
    shortcut: '/assets/images/favicon.ico',
    touch: '/assets/images/govuk-apple-touch-icon.png'
  },
  footer: {
    copyright: 'crown', // Crown copyright
    licence: 'ogl' // Open Government Licence v3.0
  },
  header: {
    homepageUrl: '/',
    productName: false
  },
  homeKey: 'Home',
  parentSite: false,
  search: false,
  stylesheets: [],
  titleSuffix: 'GOV.UK',
  url: false
}

module.exports = function (options, pathPrefix) {
  options.pathPrefix = pathPrefix

  // Support former `header.organisationName` option
  // Deprecated: will be removed in v7.0
  if (options.header?.organisationName) {
    options.titleSuffix = options.header.organisationName
  }

  // Let `true` mean the default title suffix (`true` is rendered as a string)
  if (options.titleSuffix === true) {
    delete options.titleSuffix
  }

  return deepmerge(defaultOptions, options)
}
