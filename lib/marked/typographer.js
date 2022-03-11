// Simple typographic replacements
const FRACTIONS_RE = /1\/[2-4]|2\/3|3\/4/
const GUILLEMETS_RE = /<<|>>/
const MATHEMATICAL_RE = /\+-|(?<= )x(?= )/
const SCOPED_ABBR_RE = /\((c|tm|r|p)\)/ig
const SCOPED_ABBR = {
  c: '©',
  r: '®',
  p: '§',
  tm: '™'
}

function replaceFn (match, name) {
  return SCOPED_ABBR[name.toLowerCase()]
}

function replaceSymbols (token) {
  token.text = token.text.replace(SCOPED_ABBR_RE, replaceFn)
}

function replaceFractions (token) {
  if (FRACTIONS_RE.test(token.text)) {
    token.text = token.text
      .replace(/(?<!\d)1\/2(?!\d)/g, '½')
      .replace(/(?<!\d)1\/3(?!\d)/g, '⅓')
      .replace(/(?<!\d)2\/3(?!\d)/g, '⅔')
      .replace(/(?<!\d)1\/4(?!\d)/g, '¼')
      .replace(/(?<!\d)3\/4(?!\d)/g, '¾')
  }
}

function replaceGuillemets (token) {
  if (GUILLEMETS_RE.test(token.raw)) {
    token.text = token.raw
      .replace(/<</g, '«')
      .replace(/>>/g, '»')
  }
}

function replaceMathematical (token) {
  if (MATHEMATICAL_RE.test(token.text)) {
    token.text = token.text
      .replace(/\+-/g, '±')
      .replace(/(?<= )x(?= )/g, '×')
  }
}

module.exports.walkTokens = (token) => {
  if (token.type === 'text') {
    replaceFractions(token)
    replaceGuillemets(token)
    replaceMathematical(token)
    replaceSymbols(token)
  }
}
