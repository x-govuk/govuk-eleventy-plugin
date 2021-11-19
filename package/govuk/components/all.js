import SiteSearch from './site-search/site-search.js'

/**
 * Get module name.
 *
 * @example
 * _getModuleName(selectable-table) // SelectableTable
 *
 * @access private
 * @param {string} string - Original value
 * @returns {string} data Updated data
 */
const _getModuleName = (string) => {
  // Convert string to camel case
  string = string.replace(/-([a-z])/g, (g) => g.charAt(1).toUpperCase())

  // Capitalise first letter
  string = string.charAt(0).toUpperCase() + string.slice(1)

  return string
}

/**
 * Find and initiate component modules.
 *
 * @example
 * [data-module="foo-bar"] initiates GOVUK11ty.FooBar()
 */
export const components = (function () {
  const GOVUK11ty = window.GOVUK11ty || {}

  // Initiate all component modules
  GOVUK11ty.initAll = function (container) {
    container = container || document.documentElement
    const modules = container.querySelectorAll('[data-module]')

    modules.forEach((module, i) => {
      const element = modules[i]
      const name = _getModuleName(element.dataset.module)
      const started = element.dataset.moduleStarted

      if (typeof GOVUK11ty[name] === 'function' && !started) {
        module = new GOVUK11ty[name]()
        module.start(element)
        element.dataset.moduleStarted = true
      }
    })
  }

  // Add component modules to GOVUK11ty object
  GOVUK11ty.SiteSearch = SiteSearch

  // Add GOVUK11ty to window global
  window.GOVUK11ty = GOVUK11ty

  return GOVUK11ty
})()
