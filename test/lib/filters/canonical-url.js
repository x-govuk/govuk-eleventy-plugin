const assert = require('node:assert/strict')
const { describe, it } = require('node:test')

const nunjucks = require('nunjucks')

const canonicalUrl = require('../../../lib/filters/canonical-url.js')

describe('canonicalUrl filter', () => {
  const ctx = { options: { url: 'https://example.com' } }
  const env = new nunjucks.Environment()
  env.addFilter('canonicalUrl', canonicalUrl)

  it('Returns given path if no site URL defined', () => {
    const result = env.renderString('{{ "/path" | canonicalUrl }}', {
      options: {}
    })

    assert.equal(result, '/path')
  })

  it('Returns external URL if doesn’t share hostname with site URL', () => {
    const result = env.renderString(
      '{{ "http://foo.bar" | canonicalUrl }}',
      ctx
    )

    assert.equal(result, 'http://foo.bar')
  })

  it('Gets canonical site URL with resolved path', () => {
    const result = env.renderString('{{ "/path" | canonicalUrl }}', ctx)

    assert.equal(result, 'https://example.com/path')
  })
})
