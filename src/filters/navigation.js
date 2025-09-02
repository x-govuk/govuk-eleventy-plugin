/**
 * Sort navigation data by order else title property
 *
 * @param {Array} eleventyNavigation - Eleventy navigation data
 * @param {boolean} [sort] - Sort navigation items
 * @returns {Array} Sorted navigation data
 */
export function sortNavigation(eleventyNavigation, sort) {
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
 * Flatten Eleventy navigation data
 *
 * @param {Array} eleventyNavigation - Eleventy navigation data
 * @returns {string} Flattened Eleventy navigation data
 */
function flattenNavigation(eleventyNavigation) {
  const navigationData = sortNavigation(eleventyNavigation, true)

  let flattened = []
  for (const item of navigationData) {
    flattened.push(item)
    if (item.children && item.children.length > 0) {
      flattened = flattened.concat(flattenNavigation(item.children))
    }
  }

  return flattened
}

/**
 * Get next item in Eleventy navigation data
 *
 * @param {Array} eleventyNavigation - Eleventy navigation data
 * @param {string} pageUrl - URL of current page
 * @returns {object} Eleventy navigation data object
 */
export function getNextNavigationItem(eleventyNavigation, pageUrl) {
  const flatNavigation = flattenNavigation(eleventyNavigation)
  const currentIndex = flatNavigation.findIndex((item) => item.url === pageUrl)

  if (currentIndex >= 0 && currentIndex < flatNavigation.length - 1) {
    return flatNavigation[currentIndex + 1]
  }

  return null
}

/**
 * Get previous item in Eleventy navigation data
 *
 * @param {Array} eleventyNavigation - Eleventy navigation data
 * @param {string} pageUrl - URL of current page
 * @returns {object} Eleventy navigation data object
 */
export function getPreviousNavigationItem(eleventyNavigation, pageUrl) {
  const flatNavigation = flattenNavigation(eleventyNavigation)
  const currentIndex = flatNavigation.findIndex((item) => item.url === pageUrl)

  if (currentIndex > 0) {
    return flatNavigation[currentIndex - 1]
  }

  return null
}
