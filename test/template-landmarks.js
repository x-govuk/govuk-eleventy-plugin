import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import nunjucks from 'nunjucks'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const projectRoot = fileURLToPath(new URL('..', import.meta.url))
const env = new nunjucks.Environment(
  new nunjucks.FileSystemLoader([
    resolve(projectRoot, 'src'),
    resolve(projectRoot, 'node_modules/govuk-frontend/dist'),
    resolve(
      projectRoot,
      'node_modules/@x-govuk/govuk-prototype-components/dist'
    )
  ])
)

const rendered = env.renderString(`
  {% extends "govuk/template.njk" %}
  {% from "components/header/macro.njk" import appHeader %}
  {% from "components/footer/macro.njk" import appFooter %}
  {% block govukHeader %}{{ appHeader({}) }}{% endblock %}
  {% block govukFooter %}{{ appFooter({}) }}{% endblock %}
`)

describe('page template landmarks', () => {
  it('does not nest a second banner landmark inside the GOV.UK header', () => {
    assert.match(
      rendered,
      /<header class="govuk-template__header[^>]*>[\s\S]*?<div class="govuk-header app-header/
    )
    assert.doesNotMatch(rendered, /role="banner"/)
  })

  it('does not nest a second contentinfo landmark inside the GOV.UK footer', () => {
    assert.match(
      rendered,
      /<footer class="govuk-template__footer[^>]*>[\s\S]*?<div class="govuk-footer app-footer/
    )
    assert.doesNotMatch(rendered, /role="contentinfo"/)
  })
})
