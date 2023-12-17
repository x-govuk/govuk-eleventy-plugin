import accessibleAutocomplete from 'accessible-autocomplete/dist/accessible-autocomplete.min.js'

export class SiteSearchElement extends HTMLElement {
  constructor() {
    super()

    this.statusMessage = null
    this.searchInputId = 'app-site-search__input'
    this.searchIndex = null
    this.searchIndexUrl = this.getAttribute('index')
    this.searchLabel = this.getAttribute('label')
    this.searchResults = []
    this.searchTimeout = 10
    this.sitemapLink = this.querySelector('.app-site-search__link')
  }

  async fetchSearchIndex(indexUrl) {
    this.statusMessage = 'Loading search index'

    try {
      const response = await fetch(indexUrl, {
        signal: AbortSignal.timeout(this.searchTimeout * 1000)
      })

      if (!response.ok) {
        throw Error('Search index not found')
      }

      const json = await response.json()
      this.statusMessage = 'No results found'
      this.searchIndex = json
    } catch (error) {
      this.statusMessage = 'Failed to load search index'
      console.error(this.statusMessage, error.message)
    }
  }

  findResults(searchQuery, searchIndex) {
    return searchIndex.filter((item) => {
      const regex = new RegExp(searchQuery, 'gi')
      return item.title.match(regex) || item.templateContent.match(regex)
    })
  }

  renderResults(query, populateResults) {
    if (!this.searchIndex) {
      return populateResults(this.searchResults)
    }

    this.searchResults = this.findResults(query, this.searchIndex).reverse()

    populateResults(this.searchResults)
  }

  handleOnConfirm(result) {
    const path = result.url
    if (!path) {
      return
    }

    window.location.href = path
  }

  handleNoResults() {
    return this.statusMessage
  }

  inputValueTemplate(result) {
    if (result) {
      return result.title
    }
  }

  searchTemplate() {
    const labelElement = document.createElement('label')
    labelElement.classList.add('govuk-visually-hidden')
    labelElement.htmlFor = this.searchInputId
    labelElement.textContent = this.searchLabel

    const searchElement = document.createElement('search')
    searchElement.append(labelElement)

    return searchElement
  }

  resultTemplate(result) {
    if (result) {
      const element = document.createElement('span')
      element.textContent = result.title

      if (result.hasFrontmatterDate || result.section) {
        const section = document.createElement('span')
        section.className = 'app-site-search--section'

        section.innerHTML =
          result.hasFrontmatterDate && result.section
            ? `${result.section}<br>${result.date}`
            : result.section || result.date

        element.appendChild(section)
      }

      return element.innerHTML
    }
  }

  async connectedCallback() {
    await this.fetchSearchIndex(this.searchIndexUrl)

    // Remove fallback link to sitemap
    if (this.sitemapLink) {
      this.sitemapLink.remove()
    }

    // Add `search` element with `label`
    const search = this.searchTemplate()
    this.append(search)

    accessibleAutocomplete({
      element: search,
      id: this.searchInputId,
      cssNamespace: 'app-site-search',
      displayMenu: 'overlay',
      minLength: 2,
      placeholder: this.searchLabel,
      confirmOnBlur: false,
      autoselect: true,
      source: this.renderResults.bind(this),
      onConfirm: this.handleOnConfirm,
      templates: {
        inputValue: this.inputValueTemplate,
        suggestion: this.resultTemplate
      },
      tNoResults: this.handleNoResults.bind(this)
    })
  }
}
