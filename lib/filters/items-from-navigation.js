const url = require('@11ty/eleventy/src/Filters/Url.js')
const smart = require('./smart.js')

/**
 * Transform Eleventy navigation data to `items` array that can be
 * consumed by GOV.UK Frontend `govukBreadcrumb` component
 *
 * @param {Array} eleventyNavigation - Eleventy navigation data
 * @param {string} [pageUrl=false] - URL of current page
 * @param {object} [options={}] - Plugin options
 * @returns {Array} - `items` array
 */
module.exports = (eleventyNavigation, pageUrl = false, options = {}) => {
  const pathPrefix = options?.pathPrefix || '/'
  const currentUrl = pageUrl ? url(pageUrl, pathPrefix) : false
  const items = []

  eleventyNavigation.forEach(item => {
    const isCurrentPage = pageUrl && url(item.url, pathPrefix) === currentUrl
    const navItem = {
      current: isCurrentPage,
      parent: pageUrl ? pageUrl.startsWith(item.url, pathPrefix) : false,
      text: smart(item.title),
      children: item.children
        ? item.children.map(child => ({
          current: pageUrl ? url(child.url, pathPrefix) === currentUrl : false,
          href: url(child.url, pathPrefix),
          text: smart(child.title)
        }))
        : false
    }

    // If the current page is being shown in the navigation, do not link to it
    if (!isCurrentPage) {
      navItem.href = url(item.url, pathPrefix)
    }

    items.push(navItem)
  })

  if (options?.parentSite) {
    items.unshift({
      href: options.parentSite.url,
      text: smart(options.parentSite.name)
    })
  }

  return items
}
