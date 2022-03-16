/**
 * Transform list of posts in a collection to `items` array that can be
 * consumed by GOV.UK Frontend components
 *
 * @param {Array} array - Eleventy collection data
 * @returns {Array} - `items` array
 */
module.exports = (array) => {
  return array.map(item => ({
    text: item.data.title,
    href: item.data.url
  }))
}
