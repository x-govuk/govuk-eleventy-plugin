module.exports.footnoteReference = {
  name: 'footnote-reference',
  level: 'inline',
  start (src) {
    return src.match(/\[\^([^\]]+)\](?!\(|:)/)?.index
  },
  tokenizer (src) {
    const rule = /^\[\^([^\]]+)\](?!\(|:)/
    const match = rule.exec(src)

    if (match) {
      const label = match[1].replace(/\W/g, '-')
      const token = {
        type: 'footnote-reference',
        label,
        raw: match[0],
        text: match[1]
      }

      return token
    }
  },
  renderer (token) {
    return `<sup id="fnref:${token.label}"><a class="govuk-link" href="#fn:${token.label}" aria-describedby="footnotes-label">${token.text}</a></sup>`
  }
}

module.exports.footnotes = {
  name: 'footnotes',
  level: 'block',
  renderer (token) {
    return `<footer>
      <hr class="govuk-section-break govuk-section-break--l govuk-section-break--visible">
      <h2 id="footnotes-label" class="govuk-visually-hidden">Footnotes</h2>
      <ol class="app-footnotes-list">
        ${token.body}
      </ol>
    </footer>`
  }
}

module.exports.footnote = {
  name: 'footnote',
  level: 'inline',
  renderer (token) {
    return `<li id="fn:${token.label}">${token.text}</li>`
  }
}
