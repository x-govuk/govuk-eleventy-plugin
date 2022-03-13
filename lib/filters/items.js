/**
 * Format Eleventy navigation to populate govukBreadcrumb component
 *
 * @param {Array} eleventyNavigation Eleventy navigation data
 * @param {string} pageUrl URL of current page
 */
module.exports = (eleventyNavigation, pageUrl) => {
  const items = []

  eleventyNavigation.map(item => items.push({
    current: pageUrl ? item.url === pageUrl : false,
    parent: pageUrl ? pageUrl.startsWith(item.url) : false,
    href: item.url,
    text: item.title,
    children: item.children
      ? item.children.map(child => ({
          current: pageUrl && child.url === pageUrl,
          href: child.url,
          text: child.title
        }))
      : false
  }))

  return items
}
