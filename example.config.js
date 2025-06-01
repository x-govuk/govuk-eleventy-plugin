import process from 'node:process'

import { govukEleventyPlugin } from './src/index.js'

export default function (eleventyConfig) {
  // Plugins
  eleventyConfig.addPlugin(govukEleventyPlugin, {
    url:
      process.env.GITHUB_ACTIONS &&
      'https://x-govuk.github.io/govuk-eleventy-plugin/example/',
    serviceNavigation: {
      serviceName: 'Apply for a juggling licence',
      serviceUrl: '/'
    },
    footer: {
      meta: {
        items: [
          {
            href: '/markdown',
            text: 'Markdown guide'
          }
        ]
      }
    },
    templates: {
      feed: true,
      searchIndex: true,
      tags: true
    }
  })

  // Passthrough
  eleventyConfig.addPassthroughCopy('./example/assets')

  // Config
  return {
    dir: {
      input: 'example',
      output: '_site/example'
    },
    pathPrefix: process.env.GITHUB_ACTIONS
      ? '/govuk-eleventy-plugin/example/'
      : '/example/'
  }
}
