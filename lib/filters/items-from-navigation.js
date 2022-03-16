const url = require('@11ty/eleventy/src/Filters/Url.js')

/**
 * Transform Eleventy navigation data to `items` array that can be
 * consumed by GOV.UK Frontend govukBreadcrumb component
 *
 * @param {Array} eleventyNavigation - Eleventy navigation data
 * @param {string} pageUrl - URL of current page
 * @param {string} pagePrefix - URL path prefix
 * @returns {Array} - `items` array
 */
module.exports = (eleventyNavigation, pageUrl, pathPrefix = '/') => {
  const currentUrl = url(pageUrl, pathPrefix)
  const items = []

  eleventyNavigation.map(item => items.push({
    current: pageUrl ? url(item.url, pathPrefix) === currentUrl : false,
    parent: pageUrl ? pageUrl.startsWith(item.url, pathPrefix) : false,
    href: url(item.url, pathPrefix),
    text: item.title,
    children: item.children
      ? item.children.map(child => ({
          current: pageUrl && url(child.url, pathPrefix) === pageUrl,
          href: url(child.url, pathPrefix),
          text: child.title
        }))
      : false
  }))

  return items
}
