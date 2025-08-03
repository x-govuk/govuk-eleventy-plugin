import accessibleAutocomplete from 'accessible-autocomplete'

export class SearchElement extends HTMLElement {
  constructor() {
    super()

    this.statusMessage = null
    this.searchInputId = 'app-search__input'
    this.searchIndex = null
    this.searchIndexUrl = this.getAttribute('index')
    this.searchLabel = this.getAttribute('label')
    this.searchResults = []
    this.searchTimeout = 10
    this.sitemapLink = this.querySelector('.app-search__link')
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
      return (
        item?.title?.match(regex) ||
        item?.description?.match(regex) ||
        item?.tokens?.match(regex)
      )
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

  suggestionTemplate(result) {
    if (result) {
      const container = document.createElement('span')

      // Add title of result to container
      const title = document.createElement('span')
      title.className = 'app-search__option-title'
      title.textContent = result.title

      container.appendChild(title)

      // Add section and/or data to container
      if (result.date || result.section) {
        const section = document.createElement('span')
        section.className = 'app-search__option-metadata'

        section.innerHTML =
          result.date && result.section
            ? `${result.section}<br>${result.date}`
            : result.section || result.date

        container.appendChild(section)
      }

      return container.innerHTML
    }
  }

  async connectedCallback() {
    if (!this.searchIndexUrl) {
      return
    }

    await this.fetchSearchIndex(this.searchIndexUrl)

    // Remove fallback link to sitemap
    if (this.sitemapLink) {
      this.sitemapLink.remove()
    }

    // Add `search` element with `label`
    const search = this.searchTemplate()
    this.append(search)

    return accessibleAutocomplete({
      element: search,
      id: this.searchInputId,
      inputClasses: 'govuk-input',
      cssNamespace: 'app-search',
      displayMenu: 'overlay',
      minLength: 2,
      autoselect: true,
      confirmOnBlur: false,
      placeholder: this.searchLabel,
      source: this.renderResults.bind(this),
      onConfirm: this.handleOnConfirm,
      templates: {
        inputValue: this.inputValueTemplate,
        suggestion: (value) => this.suggestionTemplate(value)
      },
      tNoResults: this.handleNoResults.bind(this)
    })
  }
}
