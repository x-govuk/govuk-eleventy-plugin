/**
 * Format Eleventy navigation to populate govukBreadcrumb component
 *
 * @param {Array} eleventyNavigationBreadcrumb Eleventy breadcrumb
 */
module.exports = eleventyNavigationBreadcrumb => {
  const items = []

  eleventyNavigationBreadcrumb.forEach(item => {
    items.push({
      text: item.title,
      href: item.url
    })
  })

  return items
}
