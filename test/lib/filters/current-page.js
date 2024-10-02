import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { currentPage } from '../../../lib/filters/current-page.js'

const navigationData = [
  { text: 'Home', href: '/' },
  { text: 'Styles', href: '/styles' }
]

describe('currentPage filter', () => {
  it('Indicates the home page is current', () => {
    const result = currentPage(navigationData, '/')

    assert.deepEqual(result, [
      { text: 'Home', href: '/', active: true },
      { text: 'Styles', href: '/styles', active: false }
    ])
  })

  it('Indicates the section page is current', () => {
    const result = currentPage(navigationData, '/styles')

    assert.deepEqual(result, [
      { text: 'Home', href: '/', active: false },
      { text: 'Styles', href: '/styles', active: true }
    ])
  })

  it('Indicates the section sub page is current', () => {
    const result = currentPage(navigationData, '/styles/colour')

    assert.deepEqual(result, [
      { text: 'Home', href: '/', active: false },
      { text: 'Styles', href: '/styles', active: true }
    ])
  })
})
