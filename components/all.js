import SiteSearch from './site-search/site-search.js'

/**
 * Initiate all component modules
 */
export const initAll = function () {
  const scope = document.documentElement

  const siteSearch = scope.querySelectorAll('[data-module="app-site-search"]')
  siteSearch.forEach(element => {
    new SiteSearch(element).init()
  })
}
