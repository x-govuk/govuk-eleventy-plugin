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
  icons: {
    mask: '/assets/rebrand/images/govuk-mask-icon.svg',
    shortcut: '/assets/rebrand/images/favicon.ico',
    touch: '/assets/rebrand/images/govuk-icon-180.png'
  },
  opengraphImageUrl: '/assets/rebrand/images/govuk-opengraph-image.png',
  stylesheets: [],
  titleSuffix: 'GOV.UK',
  url: false,
  templates: {
    error404: true,
    sitemap: true
  }
}

export function defaultPluginOptions(options, pathPrefix) {
  options.pathPrefix = pathPrefix

  // Let `true` mean the default title suffix (`true` is rendered as a string)
  if (options.titleSuffix === true) {
    delete options.titleSuffix
  }

  // Add _feedPath to enable feed to be linked to from page head
  if (options.templates?.feed) {
    options._feedPath = options.templates?.feed?.permalink || '/feed.xml'
  }

  return deepmerge(defaults, options)
}
