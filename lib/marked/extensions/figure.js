module.exports = {
  name: 'figure',
  level: 'inline',
  start (src) {
    return src.match(/!(?:\[([^\]]*)?\])/)?.index
  },
  tokenizer (src) {
    const rule = /^!(?:\[(?<alt>[^\]]*)?\])\((?<href>(https?:\/\/)?[A-Za-z0-9\-_:/.]+) (?:["|'](?<title>.+)["|'])?\)/
    const match = rule.exec(src)

    if (match) {
      const token = {
        type: 'figure',
        raw: match[0],
        src: match.groups.href,
        alt: match.groups.alt,
        caption: match.groups.title,
        tokens: []
      }
      this.lexer.blockTokens(token.caption, token.tokens)

      return token
    }
  },
  renderer (token) {
    return `<figure>
      <img src="${token.src}" alt="${token.alt}">
      <figcaption>
        ${this.parser.parse(token.tokens)}
      </figcaption>
    </figure>`
  }
}
