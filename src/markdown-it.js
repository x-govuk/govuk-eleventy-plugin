import slugify from '@sindresorhus/slugify'
import MarkdownIt from 'markdown-it'
import markdownItAbbr from 'markdown-it-abbr'
import markdownItAnchor from 'markdown-it-anchor'
import markdownItAttribution from 'markdown-it-attribution'
import markdownItAttrs from 'markdown-it-attrs'
import markdownItDeflist from 'markdown-it-deflist'
import markdownItFootnote from 'markdown-it-footnote'
import MarkdownItGitHubAlerts from 'markdown-it-github-alerts'
import markdownItGovuk from 'markdown-it-govuk'
import highlight from 'markdown-it-govuk/highlight'
import markdownItImageFigures from 'markdown-it-image-figures'
import markdownItIns from 'markdown-it-ins'
import markdownItMark from 'markdown-it-mark'
import markdownItSub from 'markdown-it-sub'
import markdownItSup from 'markdown-it-sup'
import markdownItTableOfContents from 'markdown-it-table-of-contents'

import { alertRules } from './markdown-it/alert.js'
import { defListRules } from './markdown-it/deflist.js'
import { footnotesRules } from './markdown-it/footnote.js'
import { tableRules } from './markdown-it/table.js'

/**
 * Configure markdown-it
 *
 * @see {@link https://markdown-it.github.io/markdown-it/}
 * @param {object} [markdownOptions] - Plugin Markdown options
 * @returns {Function} markdown-it instance
 */
export function md(markdownOptions = {}) {
  const opts = {
    breaks: true,
    highlight,
    html: true,
    linkify: false,
    typographer: true,
    ...markdownOptions
  }

  const md = new MarkdownIt(opts)
    .use(markdownItGovuk, {
      calvert: true,
      headingsStartWith: markdownOptions.headingsStartWith
    })
    .use(markdownItAbbr)
    .use(markdownItAnchor, {
      permalink: markdownOptions.headingPermalinks
        ? markdownItAnchor.permalink.headerLink({
            class: 'app-link--heading',
            safariReaderFix: true
          })
        : false,
      slugify: (string) => slugify(string).replaceAll(/[*+~.()'"!:@]/g, '')
    })
    .use(markdownItAttribution, {
      classNameContainer: 'app-attribution',
      classNameAttribution: 'app-attribution__caption',
      marker: '--'
    })
    .use(markdownItAttrs)
    .use(markdownItDeflist)
    .use(defListRules)
    .use(markdownItFootnote)
    .use(footnotesRules)
    .use(MarkdownItGitHubAlerts)
    .use(alertRules)
    .use(markdownItIns)
    .use(markdownItImageFigures, {
      figcaption: true
    })
    .use(markdownItMark)
    .use(markdownItSub)
    .use(markdownItSup)
    .use(tableRules)
    .use(markdownItTableOfContents, {
      includeLevel: [2, 3],
      listType: 'ol',
      transformContainerOpen: () => {
        return '<nav class="app-contents-list"><h2 class="app-contents-list__title">Contents</h2>'
      },
      transformContainerClose: () => {
        return '</nav>'
      }
    })

  return md
}
