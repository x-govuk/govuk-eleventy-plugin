/**
 * Reduce size of a string by removing duplicate and common words
 *
 * @see {@link https://www.hawksworx.com/blog/adding-search-to-a-jamstack-site}
 * @param {string} string - Original string
 * @returns {string} Tokenised string
 */
export function tokenize(string) {
  let content = String(string)

  // Convert to lower case
  content = content.toLowerCase()

  // Remove HTML elements
  let tokens = content.replace(
    /<script.*?<\/script>|<!--.*?-->|<style.*?<\/style>|<.*?>/g,
    ' '
  )

  // Remove HTML entities
  tokens = tokens.replace(/&[a-zA-Z0-9#]+;/gi, ' ')

  // Remove special characters
  tokens = tokens.replace(/[^0-9a-zA-Z]+/gi, ' ')

  // Remove short and less meaningful words
  tokens = tokens.replace(
    /\b(the|a|an|and|am|you|I|to|if|of|off|me|my|on|in|it|is|at|as|we|do|be|has|but|was|so|no|not|or|up|for)\b/gi,
    ' '
  )

  // Remove duplicated tokens
  tokens = tokens.split(' ')
  const deDuped = [...new Set(tokens)]
  const deDupedStr = deDuped.join(' ')

  // Remove repeated spaces
  const result = deDupedStr.replace(/[ ]{2,}/g, ' ').trim()

  return result
}
