const path = require('node:path')

/**
 * Get canonical site URL with resolved path
 * @param {string} string - Path to resolve
 * @returns {string} Canonical site URL with resolved path
 */
module.exports = function (string = '') {
  const { options } = this.ctx

  // No site URL configured
  if (!options?.url) {
    return string
  }

  // If plugin options do not provide a site URL, return the path
  if (!URL.canParse(options.url)) {
    return string
  }

  const siteUrl = new URL(options.url)

  // If incoming string is a URL, return that if it’s an external URL
  if (URL.canParse(string)) {
    const incomingUrl = new URL(string)

    if (siteUrl.hostname !== incomingUrl.hostname) {
      return string
    }
  }

  // String is a path, so append it to any path on site URL
  siteUrl.pathname = path.join(siteUrl.pathname, string)

  return siteUrl.href
}
