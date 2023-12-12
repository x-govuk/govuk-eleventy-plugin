/**
 * Indicate which is the current item in navigation items
 * @param {Array} array - Navigation items
 * @param {string} pageUrl - URL of current page
 * @returns {Array} Navigation items
 */
module.exports = (array, pageUrl) => {
  return array.map((item) => {
    item.current = pageUrl.startsWith(item.href)

    return item
  })
}
