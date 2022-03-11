module.exports = {
  name: 'inserted',
  level: 'inline',
  start (src) {
    return src.match(/(\+\+)(?=[^\s~])/)?.index
  },
  tokenizer (src) {
    const rule = /^(\+\+)(?=[^\s\+\+])([\s\S]*?[^\s\+\+])\1(?=[^\+\+]|$)/
    const match = rule.exec(src)

    if (match) {
      const token = {
        type: 'inserted',
        raw: match[0],
        text: match[0].slice(2, -2)
      }

      return token
    }
  },
  renderer (token) {
    return `<ins>${token.text}</ins>`
  }
}
