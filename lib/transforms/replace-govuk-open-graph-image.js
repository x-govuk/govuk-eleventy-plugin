const url = require('@11ty/eleventy/src/Filters/Url.js')
const absoluteUrl = require('@11ty/eleventy-plugin-rss/src/absoluteUrl.js')

/**
 * Replace stubbornly default GOV.UK Open Graph image with user defined image
 *
 * @param {object} options - Plugin options
 * @returns {string}
 */
module.exports = (options) => {
  return async (content, outputPath) => {
    if (!options.ogImage) {
      return
    }

    if (outputPath && outputPath.endsWith('.html')) {
      // Open Graph image should respect any pathPrefix
      let ogImageUrl = url(options.ogImage, options.pathPrefix)

      // Open Graph image should have a canonical URL
      ogImageUrl = absoluteUrl(ogImageUrl, options.url)

      // Regex to find default GOV.UK Open Graph image in template.njk
      const GOVUK_OGIMAGE_RE = /<meta property="og:image" content="(.*\/images\/govuk-opengraph-image\.png)">/g

      const replacementUrl = (match, p1, offset, string) => {
        return match.replace(p1, ogImageUrl)
      }

      return content.replace(GOVUK_OGIMAGE_RE, replacementUrl)
    }

    return content
  }
}
