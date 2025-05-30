/**
 * Render a definition list
 *
 * @param {Function} md - markdown-it instance
 */
export function defListRules(md) {
  const { rules } = md.renderer

  rules.dl_open = () => '<dl class="govuk-body">\n'

  rules.dt_open = () =>
    '<dt class="govuk-!-font-weight-bold govuk-!-margin-bottom-2">\n'

  rules.dd_open = () =>
    '<dd class="govuk-!-margin-bottom-2 govuk-!-margin-left-4">\n'
}
