/**
 * Transform Eleventy pagination data to `items` array that can be
 * consumed by GOV.UK Frontend `govukPagination` component
 * @param {Array} pagination - Eleventy pagination data
 * @returns {Array} `items` array
 */
module.exports = (pagination) => {
  const items = []

  pagination.pages.forEach((item, index) => {
    items.push({
      current: index === pagination.pageNumber,
      number: index + 1,
      href: pagination.hrefs[index]
    })
  })

  return items
}
