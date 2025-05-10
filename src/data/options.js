import deepmerge from 'deepmerge'

/**
 * Default option values
 *
 * @see {@link https://x-govuk.github.io/govuk-eleventy-plugin/options/}
 */
const defaults = {
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
  stylesheets: [],
  titleSuffix: 'GOV.UK',
  url: false
}

export function defaultPluginOptions(options, pathPrefix) {
  options.pathPrefix = pathPrefix

  // Let `true` mean the default title suffix (`true` is rendered as a string)
  if (options.titleSuffix === true) {
    delete options.titleSuffix
  }

  // Rewrite default GOV.UK icon asset paths if rebrand enabled
  defaults.icons = options.rebrand
    ? {
        mask: '/assets/rebrand/images/govuk-mask-icon.svg',
        shortcut: '/assets/rebrand/images/favicon.ico',
        touch: '/assets/rebrand/images/govuk-icon-180.png'
      }
    : {
        mask: '/assets/images/govuk-mask-icon.svg',
        shortcut: '/assets/images/favicon.ico',
        touch: '/assets/images/govuk-icon-180.png'
      }

  // Rewrite default GOV.UK Opengraph asset path if rebrand enabled
  defaults.opengraphImageUrl = options.rebrand
    ? '/assets/rebrand/images/govuk-opengraph-image.png'
    : '/assets/images/govuk-opengraph-image.png'

  return deepmerge(defaults, options)
}
