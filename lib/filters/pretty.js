/**
 * Remove (index).html from a string
 *
 * @see {@link https://www.w3.org/Provider/Style/URI.html}
 *
 * @param {string} string - URL, i.e. /page/index.html
 * @return {string} - Permalink URL, i.e. /page/
 */
module.exports = string => {
  string = String(string)
  return string.replace(/(?:index)?\.html/g, '')
}
