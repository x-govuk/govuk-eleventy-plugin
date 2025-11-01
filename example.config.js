import fs from 'node:fs/promises'
import process from 'node:process'

import { govukEleventyPlugin } from './src/index.js'

export default function (eleventyConfig) {
  // Plugins
  eleventyConfig.addPlugin(govukEleventyPlugin, {
    url:
      process.env.GITHUB_ACTIONS &&
      'https://x-govuk.org/govuk-eleventy-plugin/example/',
    serviceNavigation: {
      serviceName: 'Apply for a juggling licence',
      serviceUrl: '/',
      search: {
        indexPath: '/search-index.json',
        sitemapPath: '/sitemap'
      }
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
      feed: {
        title: 'Example feed'
      },
      searchIndex: true,
      tags: true
    }
  })

  // Passthrough
  eleventyConfig.addPassthroughCopy('./example/assets')

  // Reset contents of output directory before each build
  eleventyConfig.on('eleventy.before', async ({ directories, runMode }) => {
    if (runMode === 'build') {
      await fs.rm(directories.output, {
        force: true,
        recursive: true
      })
    }
  })

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
