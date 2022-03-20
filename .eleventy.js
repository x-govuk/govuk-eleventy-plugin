module.exports = function (eleventyConfig) {
  const url = process.env.GITHUB_ACTIONS
    ? 'https://x-govuk.github.io/govuk-eleventy-plugin/'
    : '/'
  const pathPrefix = process.env.GITHUB_ACTIONS
    ? '/govuk-eleventy-plugin'
    : '/'

  // Plugins
  eleventyConfig.addPlugin(require('./index.js'), {
    brandColour: '#28a',
    fontFamily: 'system-ui, sans-serif',
    icons: {
      mask: '/assets/images/x-govuk-mask-icon.svg',
      shortcut: '/assets/images/x-govuk-favicon.ico',
      touch: '/assets/images/x-govuk-apple-touch-icon.png'
    },
    homeKey: 'GOV.UK Eleventy Plugin',
    parentSite: {
      url: 'https://x-govuk.github.io',
      name: 'X-GOVUK shared projects'
    },
    pathPrefix,
    url,
    header: {
      organisationLogo: 'x-govuk',
      organisationName: 'X-GOVUK',
      productName: 'Eleventy Plugin',
      search: {
        indexPath: '/search.json',
        sitemapPath: '/sitemap'
      }
    },
    footer: {
      copyright: '© X-GOVUK',
      licence: 'Licensed under the [MIT Licence](https://github.com/x-govuk/govuk-eleventy-plugin/blob/main/LICENSE.txt), except where otherwise stated',
      meta: {
        items: [{
          href: 'https://www.11ty.dev',
          text: 'Documentation for Eleventy (opens in a new tab)',
          attributes: {
            target: '_blank'
          }
        }]
      }
    }
  })

  // Collections
  eleventyConfig.addCollection('layout', collection =>
    collection.getFilteredByTag('layout')
      .sort((a, b) => (a.data.order || 0) - (b.data.order || 0))
  )
  eleventyConfig.addCollection('homepage', collection =>
    collection.getFilteredByTag('homepage')
      .sort((a, b) => (a.data.order || 0) - (b.data.order || 0))
  )

  // Passthrough
  eleventyConfig.addPassthroughCopy('./docs/assets')

  // Config
  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      input: 'docs',
      output: 'public',
      layouts: '../layouts'
    },
    pathPrefix
  }
}
