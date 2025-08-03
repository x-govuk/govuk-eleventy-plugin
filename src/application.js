import { initAll as GOVUKFrontend } from 'govuk-frontend'

import { SearchElement } from './components/search/search.js'

// Initiate custom elements
customElements.define('app-search', SearchElement)

// Initiate scripts on page load
document.addEventListener('DOMContentLoaded', () => {
  GOVUKFrontend()
})
