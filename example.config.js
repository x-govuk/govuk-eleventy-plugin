import fs from 'node:fs/promises'

import { govukEleventyPlugin } from './src/index.js'

export default function (eleventyConfig) {
  // Plugins
  eleventyConfig.addPlugin(govukEleventyPlugin, {
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
    pathPrefix: '/example/'
  }
}
