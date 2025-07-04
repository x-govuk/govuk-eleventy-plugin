import assert from 'node:assert/strict'
import { describe, it } from 'node:test'

import { md } from '../src/markdown-it.js'

describe('markdown-it', () => {
  it('Returns configured markdown-it parser', () => {
    const { options } = md()

    assert.equal(options.breaks, true)
    assert.equal(typeof options.highlight, 'function')
    assert.equal(options.html, true)
    assert.equal(options.linkify, false)
    assert.equal(options.typographer, true)
  })

  it('Uses provided configuration overrides', () => {
    const pluginOptions = {
      markdownIt: {
        options: {
          breaks: false,
          langPrefix: 'lang-'
        }
      }
    }

    const { options } = md(pluginOptions)

    assert.equal(options.breaks, false)
    assert.equal(typeof options.highlight, 'function')
    assert.equal(options.html, true)
    assert.equal(options.linkify, false)
    assert.equal(options.typographer, true)
    assert.equal(options.langPrefix, 'lang-')
  })

  it('Renders anchor heading permalinks when option enabled', () => {
    const result = md({ headingPermalinks: true }).render('# Heading')

    assert.equal(
      result,
      '<h1 id="heading" tabindex="-1" class="govuk-heading-xl"><a class="app-link--heading govuk-link" href="#heading"><span>Heading</span></a></h1>\n'
    )
  })

  it('Renders a definition list', () => {
    const result = md().render('Term\n: Definition')

    assert.match(result, /<dl class="govuk-body"/)
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
    assert.match(result, /href="#b"/)
    assert.doesNotMatch(result, /href="#a"/)
  })

  it('Renders a table with `tabindex` to enable keyboard scrolling', () => {
    const result = md().render('|A|B|\n|-|-|\n|1|2|')

    assert.match(result, /<table tabindex="0"/)
  })

  it('Allows configuring additional plugins', () => {
    const plugin = (md) => {
      const { rules } = md.renderer
      rules.dl_open = () => '<dl class="govuk-summary-list">\n'
    }

    const options = {
      markdownIt: {
        configure(md) {
          md.use(plugin)
        }
      }
    }
    const result = md(options).render('Term\n: Definition')

    assert.match(result, /<dl class="govuk-summary-list"/)
  })
})
