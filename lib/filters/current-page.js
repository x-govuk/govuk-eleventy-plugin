/**
 * Indicate which is the current item in navigation items
 * @param {Array} array - Navigation items
 * @param {string} pageUrl - URL of current page
 * @returns {Array} Navigation items
 */
module.exports = (array, pageUrl) => {
  return array.map((item) => {
    item.active =
      item.href === '/'
        ? pageUrl === '/' // Page is home page
        : pageUrl.startsWith(item.href) // Page is within navigation section

    return item
  })
}
