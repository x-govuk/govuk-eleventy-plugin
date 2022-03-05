/**
 * Format Eleventy navigation to populate govukBreadcrumb component
 *
 * @param {Array} eleventyNavigationBreadcrumb Eleventy breadcrumb
 * @param {string} pageUrl URL of current page
 */
module.exports = (eleventyNavigationBreadcrumb, pageUrl) => {
  const items = []

  eleventyNavigationBreadcrumb.map(item => {
    items.push({
      current: pageUrl && item.url === pageUrl,
      parent: pageUrl && pageUrl.startsWith(item.url),
      href: item.url,
      text: item.title,
      children: item.children
        ? item.children.map(child => ({
          current: pageUrl && child.url === pageUrl,
          href: child.url,
          text: child.title,
        }))
        : false
    })
  })

  return items
}
