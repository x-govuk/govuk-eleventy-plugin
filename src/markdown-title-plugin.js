import { JSDOM } from 'jsdom'

import { getNavigationKey, getNavigationParent } from './utils.js'

export async function markdownTitlePlugin(eleventyConfig) {
  // Use first h1 in content for the page title
  eleventyConfig.addGlobalData('eleventyComputed', () => {
    return {
      eleventyNavigation: {
        key: (data) => getNavigationKey(data),
        parent: (data) => getNavigationParent(data),
        excerpt: (data) => data.eleventyNavigation.excerpt || data.description
      },
      title: (data) => {
        if (data.page?.rawInput) {
          const markdown = data.page.rawInput.toString()
          const matches = markdown.match(/^\s*#\s+(?<title>[^\n\r]+)/)
          if (matches?.groups?.title) {
            return matches.groups.title.trim()
          }
        }
        return data.title || ''
      }
    }
  })

  // Remove original h1 from rendered content
  eleventyConfig.addTransform('removeH1', function (content, outputPath) {
    if (outputPath && outputPath.endsWith('.html')) {
      const dom = new JSDOM(content)
      const document = dom.window.document

      const firstH1 = document.querySelector(
        '.app-prose-scope h1:first-of-type'
      )

      if (firstH1) {
        firstH1.remove()
      }

      return dom.serialize()
    }

    return content
  })
}
