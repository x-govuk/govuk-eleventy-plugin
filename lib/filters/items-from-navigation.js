const smart = require('./smart.js')

/**
 * Transform Eleventy navigation data to `items` array that can be
 * consumed by GOV.UK Frontend `govukBreadcrumb` component
 * @param {Array} eleventyNavigation - Eleventy navigation data
 * @param {string} [pageUrl] - URL of current page
 * @param {object} [options] - Plugin options
 * @returns {Array} `items` array
 */
module.exports = (eleventyNavigation, pageUrl = false, options = {}) => {
  const items = []

  eleventyNavigation.forEach((item) => {
    const isCurrentPage = pageUrl && item.url === pageUrl
    const navItem = {
      current: isCurrentPage,
      parent: pageUrl && pageUrl.startsWith(item.url),
      href: item.url,
      text: smart(item.title),
      children: item.children
        ? item.children.map((child) => ({
            current: pageUrl && child.url === pageUrl,
            href: child.url,
            text: smart(child.title)
          }))
        : false
    }

    // If the current page is being shown in the navigation, do not link to it
    if (!isCurrentPage) {
      navItem.href = item.url
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
