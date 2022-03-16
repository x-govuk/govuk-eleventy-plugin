/**
 * Transform list of posts in a collection to `items` array that can be
 * consumed by the `appRelatedNavigation` component
 *
 * @param {Array} array Array to transform
 * @return {Array} Transformed array
 *
 */
module.exports = (array) => {
  return array.map(item => ({
    text: item.data.title,
    href: item.data.url
  }))
}
