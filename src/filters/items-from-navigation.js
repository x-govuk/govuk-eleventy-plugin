import { smart } from './smart.js'

/**
 * Sort navigation data by order else title property
 *
 * @param {Array} eleventyNavigation - Eleventy navigation data
 * @param {boolean} [sort] - Sort navigation items
 * @returns {Array} Sorted navigation data
 */
function sortNavigationItems(eleventyNavigation, sort) {
  if (sort) {
    eleventyNavigation.sort((a, b) => {
      if (
        typeof a.data?.order !== 'undefined' &&
        typeof b.data?.order !== 'undefined'
      ) {
        // Sort by order value, if given
        return (a.data.order || 0) - (b.data.order || 0)
      }

      // Sort by title
      if (a.title < b.title) {
        return -1
      } else if (a.title > b.title) {
        return 1
      }

      return 0
    })
  }

  return eleventyNavigation
}

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
  const navigationData = sortNavigationItems(eleventyNavigation, sort)

  navigationData.forEach((item) => {
    const isCurrentPage = pageUrl && item.url === pageUrl
    const navigationItem = {
      current: isCurrentPage,
      parent: pageUrl && pageUrl.startsWith(item.url),
      href: item.url,
      text: smart(item.title),
      theme: item.data?.theme,
      children: item.children
        ? sortNavigationItems(item.children, sort).map((child) => ({
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
