const footnoteStart = /^\[\^[^\]]+\]: /
const footnoteMatch = /^\[\^([^\]]+)\]: ([\s\S]*)$/

/**
 * Find footnotes and move them to the end of the markdown page
 *
 * This currently can’t be achieved within the confines of the marked API,
 * so we have to update to the token object manually after all other parsing
 * has been performed.
 *
 * New `footnote` and `footnotes` token types are however added as extensions.
 *
 * @param {function} marked marked function
 * @param {markdown} markdown Markdown string
 * @returns {object} marked token object
 */
module.exports = (marked, markdown) => {
  const footnoteItems = []
  let tokens = marked.lexer(markdown)

  // Remove footnotes from tokens
  tokens.forEach((token, index) => {
    // If token is not a footnote, ignore
    if (token.type !== 'paragraph' || !footnoteStart.test(token.text)) {
      return
    }

    // If footnote, update token properties and add to footnotes array
    const match = token.text.match(footnoteMatch)
    if (match) {
      token.type = 'footnote'
      token.label = match[1].replace(/\W/g, '-')
      token.raw = match[2]

      // Treat subsequent indented code as continuation of multi-line note
      const nextBlockToken = tokens[index + 2]
      if (
        nextBlockToken &&
        nextBlockToken.type === 'code' &&
        nextBlockToken.codeBlockStyle === 'indented') {
        nextBlockToken.type = 'footnote'
        token.raw += `\n\n${nextBlockToken.text}`
      }

      // Append return link
      token.raw += ` <a href="#fnref:${token.label}" aria-label="Back to content">↩</a>`
      token.text = marked.parse(token.raw)

      // Add updated token to footnotes array
      footnoteItems.push(token)
    }
  })

  // Add footnotes to html
  if (footnoteItems.length > 0) {
    // Remove footnote tokens
    tokens = tokens.filter(token => token.type !== 'footnote')

    // …as they appears in a footnotes list at the end of the page
    tokens.push({
      type: 'footnotes',
      body: marked.parser(footnoteItems)
    })
  }

  return tokens
}
