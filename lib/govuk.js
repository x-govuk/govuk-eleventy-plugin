import { initAll as GOVUKFrontend } from 'govuk-frontend'
import { SiteSearchElement } from '../components/site-search/site-search.js'

// Initiate custom elements
customElements.define('site-search', SiteSearchElement)

// Initiate scripts on page load
document.addEventListener('DOMContentLoaded', () => {
  GOVUKFrontend()
})
