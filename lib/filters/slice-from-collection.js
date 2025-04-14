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
