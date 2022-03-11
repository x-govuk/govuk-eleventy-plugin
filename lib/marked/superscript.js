module.exports = {
  name: 'superscript',
  level: 'inline',
  start (src) {
    return src.match(/(\^)(?=[^\s~])/)?.index
  },
  tokenizer (src) {
    const rule = /^(\^)(?=[^\s^])([\s\S]*?[^\s^])\1(?=[^^]|$)/
    const match = rule.exec(src)

    if (match) {
      const token = {
        type: 'superscript',
        raw: match[0],
        text: match[0].slice(1, -1)
      }

      return token
    }
  },
  renderer (token) {
    return `<sup>${token.text}</sup>`
  }
}
