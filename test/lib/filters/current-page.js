const assert = require('assert/strict')
const { describe, it } = require('node:test')
const currentPage = require('../../../lib/filters/current-page.js')

const navigationData = [
  { text: 'Home', href: '/' },
  { text: 'Styles', href: '/styles' }
]

describe('currentPage filter', () => {
  it('Indicates the home page is current', () => {
    const result = currentPage(navigationData, '/')

    assert.deepEqual(result, [
      { text: 'Home', href: '/', current: true },
      { text: 'Styles', href: '/styles', current: false }
    ])
  })

  it('Indicates the section page is current', () => {
    const result = currentPage(navigationData, '/styles')

    assert.deepEqual(result, [
      { text: 'Home', href: '/', current: false },
      { text: 'Styles', href: '/styles', current: true }
    ])
  })

  it('Indicates the section sub page is current', () => {
    const result = currentPage(navigationData, '/styles/colour')

    assert.deepEqual(result, [
      { text: 'Home', href: '/', current: false },
      { text: 'Styles', href: '/styles', current: true }
    ])
  })
})
