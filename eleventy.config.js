import process from 'node:process'

import { govukEleventyPlugin } from './src/index.js'
import { markdownTitlePlugin } from './src/markdown-title-plugin.js'
import { layoutNames } from './src/utils.js'

const serviceName = 'GOV.UK Eleventy Plugin'

export default function (eleventyConfig) {
  // Plugins
  eleventyConfig.addPlugin(govukEleventyPlugin, {
    icons: {
      mask: 'https://raw.githubusercontent.com/x-govuk/logo/main/images/x-govuk-icon-mask.svg?raw=true',
      shortcut:
        'https://raw.githubusercontent.com/x-govuk/logo/main/images/favicon.ico',
      touch:
        'https://raw.githubusercontent.com/x-govuk/logo/main/images/x-govuk-icon-180.png'
    },
    opengraphImageUrl:
      'https://x-govuk.github.io/govuk-eleventy-plugin/assets/opengraph-image.png',
    themeColor: '#2288aa',
    titleSuffix: serviceName,
    homeKey: serviceName,
    showBreadcrumbs: false,
    headingPermalinks: true,
    url:
      process.env.GITHUB_ACTIONS &&
      'https://x-govuk.github.io/govuk-eleventy-plugin/',
    stylesheets: ['/assets/application.css'],
    header: {
      homepageUrl: 'https://x-govuk.github.io'
    },
    serviceNavigation: {
      serviceName,
      serviceUrl: process.env.GITHUB_ACTIONS ? '/govuk-eleventy-plugin/' : '/',
      search: {
        indexPath: '/search.json',
        sitemapPath: '/sitemap'
      },
      navigation: [
        {
          text: 'Get started',
          href: '/get-started/'
        },
        {
          text: 'Features',
          href: '/features/'
        },
        {
          text: 'Layouts',
          href: '/layouts/'
        }
      ]
    },
    footer: {
      contentLicence: {
        html: 'Licensed under the <a class="govuk-footer__link" href="https://github.com/x-govuk/govuk-eleventy-plugin/blob/main/LICENSE.txt">MIT Licence</a>, except where otherwise stated'
      },
      copyright: { text: '© X-GOVUK' },
      meta: {
        items: [
          {
            href: 'https://www.11ty.dev',
            text: 'Documentation for Eleventy (opens in a new tab)',
            attributes: { target: '_blank' }
          }
        ]
      }
    }
  })

  eleventyConfig.addPlugin(markdownTitlePlugin)

  // Collections
  eleventyConfig.addCollection('feature', (collection) =>
    collection
      .getFilteredByGlob(['docs/features/*.md'])
      .sort((a, b) => a.data?.title.localeCompare(b.data?.title))
  )
  eleventyConfig.addCollection('layout', (collection) =>
    collection
      .getFilteredByGlob(['docs/layouts/*.md'])
      .sort((a, b) => a.data?.title.localeCompare(b.data?.title))
  )
  eleventyConfig.addCollection('homepage', (collection) =>
    collection
      .getFilteredByGlob([
        'docs/get-started/options.md',
        'docs/features.md',
        'docs/layouts.md'
      ])
      .sort((a, b) => a.data?.title.localeCompare(b.data?.title))
  )
  eleventyConfig.addCollection('upgrading', (collection) =>
    collection
      .getFilteredByGlob(['docs/upgrading/*.md'])
      .sort((a, b) => a.data?.title.localeCompare(b.data?.title))
  )

  // Global data
  eleventyConfig.addGlobalData('layoutNames', layoutNames)

  // Passthrough
  eleventyConfig.addPassthroughCopy('./docs/assets')

  // Watch
  eleventyConfig.addWatchTarget('./src/')

  // Enable X-GOVUK brand
  eleventyConfig.addNunjucksGlobal('xGovuk', true)

  // Config
  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: { input: 'docs' },
    pathPrefix: process.env.GITHUB_ACTIONS && '/govuk-eleventy-plugin/'
  }
}
