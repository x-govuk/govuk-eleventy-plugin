/**
 * Indicate which is the current item in navigation items
 *
 * @param {Array} array - Navigation items
 * @param {string} pageUrl - URL of current page
 * @returns {Array} Navigation items
 */
export function currentPage(array, pageUrl) {
  return array.map((item) => {
    const normalizedHref = item.href.replace(/\/$/, '') || '/'
    const normalizedPageUrl = pageUrl.replace(/\/$/, '') || '/'

    item.active =
      normalizedPageUrl === normalizedHref ||
      normalizedPageUrl.startsWith(`${normalizedHref}/`)

    return item
  })
}
