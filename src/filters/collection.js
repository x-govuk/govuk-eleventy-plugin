/**
 * Get the first `n` elements of a collection. Based on filter provided for the
 * virtual templates in @11ty/eleventy-plugin-rss’
 *
 * @param {Array} array - Eleventy collection data
 * @param {number} n - Number of items to slice from collection
 * @returns {Array} Eleventy collection data
 * @see https://github.com/11ty/eleventy-plugin-rss/blob/main/src/virtualTemplate.js
 */
export function sliceFromCollection(array, n) {
  if (!n || n === 0) {
    return array
  }
  if (n < 0) {
    return array.slice(n)
  }
  return array.slice(0, n)
}

/**
 * Sort collection data by order else title property
 *
 * @param {Array} eleventyCollection - Eleventy collection data
 * @param {boolean} [sort] - Sort navigation items
 * @returns {Array} Sorted navigation data
 */
export function sortCollection(eleventyCollection, sort) {
  if (sort) {
    eleventyCollection.sort((a, b) => {
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

  return eleventyCollection
}
