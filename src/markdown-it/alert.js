/**
 * Render a GitHub-style alert
 *
 * @param {Function} md - markdown-it instance
 */
export function alertRules(md) {
  const { rules } = md.renderer

  rules.alert_open = function (tokens, idx) {
    const { title, type } = tokens[idx].meta

    const visuallyHiddenTitle = type.charAt(0).toUpperCase() + type.slice(1)
    const hasCustomTitle = title !== visuallyHiddenTitle

    let html = `<div class="govuk-inset-text app-inset-text--${type}">`

    html += hasCustomTitle
      ? `<h3 class="govuk-heading-m"><span class="govuk-visually-hidden">${visuallyHiddenTitle}: </span>${title}</h3>`
      : `<span class="govuk-visually-hidden">${visuallyHiddenTitle}: </span>`

    return html
  }
}
