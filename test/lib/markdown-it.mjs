import { strict as assert } from 'node:assert'
import { describe, it } from 'node:test'
import md from '../../lib/markdown-it.js'

describe('markdown-it', () => {
  it('Returns configured markdown-it parser', () => {
    const { options } = md()

    assert.equal(options.breaks, true)
    assert.equal(typeof options.highlight, 'function')
    assert.equal(options.html, true)
    assert.equal(options.linkify, false)
    assert.equal(options.typographer, true)
  })

  it('Renders anchor heading permalinks when option enabled', () => {
    const result = md({
      headingPermalinks: true
    }).render('# Heading')

    assert.equal(result, '<h1 id="heading" tabindex="-1" class="govuk-heading-xl"><a class="app-link--heading govuk-link" href="#heading"><span>Heading</span></a></h1>\n')
  })

  it('Renders a definition list', () => {
    const result = md().render('Term\n: Definition')

    assert.match(result, /<dl class="app-definition-list"/)
  })

  it('Renders footnotes', () => {
    const result = md().render('A[^1]\nB[^1]\n\n[^1]: One')

    assert.match(result, /<sup id="fnref:1"/)
    assert.match(result, /href="#fn:1"/)
    assert.match(result, /<li id="fn:1"/)
    assert.match(result, /href="#fnref:1"/)

    assert.match(result, /<sup id="fnref:1:1"/)
    assert.match(result, /href="#fn:1:1"/)
  })

  it('Renders a table of contents', () => {
    const result = md().render('[[toc]]\n\n# A\n\n## B')

    assert.match(result, /<nav class="app-contents-list"/)
    assert.match(result, /aria-label="Contents"/)
    assert.match(result, /href="#b"/)
    assert.doesNotMatch(result, /href="#a"/)
  })

  it('Renders a table with `tabindex` to enable keyboard scrolling', () => {
    const result = md().render('|A|B|\n|-|-|\n|1|2|')

    assert.match(result, /<table tabindex="0"/)
  })
})
