import { smart } from './smart.js'

/**
 * Transform Eleventy navigation data to `items` array that can be
 * consumed by GOV.UK Frontend `govukBreadcrumb` component
 *
 * @param {Array} eleventyNavigation - Eleventy navigation data
 * @param {string} [pageUrl] - URL of current page
 * @param {object} [options] - Plugin options
 * @param {boolean} [sort] - Sort navigation items
 * @returns {Array} `items` array
 */
export function itemsFromNavigation(
  eleventyNavigation,
  pageUrl = false,
  options = {},
  sort = false
) {
  const items = []

  eleventyNavigation.forEach((item) => {
    const isCurrentPage = pageUrl && item.url === pageUrl
    const navItem = {
      current: isCurrentPage,
      parent: pageUrl && pageUrl.startsWith(item.url),
      href: item.url,
      text: smart(item.title),
      order: item.data?.order,
      theme: item.data?.theme,
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

  if (sort) {
    items.sort((a, b) => {
      if (typeof a.order !== 'undefined' && typeof b.order !== 'undefined') {
        // Sort by order value, if given
        return (a.order || 0) - (b.order || 0)
      }

      // Sort by title
      if (a.text < b.text) {
        return -1
      } else if (a.text > b.text) {
        return 1
      }

      return 0
    })
  }

  return items
}
