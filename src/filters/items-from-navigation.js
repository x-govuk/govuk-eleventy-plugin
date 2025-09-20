import { sortCollection } from './collection.js'
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
  const navigationItems = []
  const navigationData = sortCollection(eleventyNavigation, sort)

  navigationData.forEach((item) => {
    const isCurrentPage = pageUrl && item.url === pageUrl
    const navigationItem = {
      current: isCurrentPage,
      parent: pageUrl && pageUrl.startsWith(item.url),
      href: item.url,
      text: smart(item.title),
      theme: item.data?.theme,
      children: item.children
        ? sortCollection(item.children, sort).map((child) => ({
            current: pageUrl && child.url === pageUrl,
            href: child.url,
            text: smart(child.title)
          }))
        : false
    }

    // If the current page is being shown in the navigation, do not link to it
    if (!isCurrentPage) {
      navigationItem.href = item.url
    }

    navigationItems.push(navigationItem)
  })

  return navigationItems
}
