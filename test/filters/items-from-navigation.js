import assert from 'node:assert/strict'
import { describe, it } from 'node:test'

import { itemsFromNavigation } from '../../src/filters/items-from-navigation.js'

const eleventyNavigationBreadcrumb = [
  {
    key: 'Home',
    parent: false,
    excerpt:
      'The familiarity of the [GOV.UK Design System](https://design-system.service.gov.uk) combined with the simplicity of the [Eleventy](https://www.11ty.dev) static site generator.',
    url: '/',
    pluginType: 'eleventy-navigation',
    title: 'Home',
    data: {},
    _isBreadcrumb: true
  },
  {
    key: 'parent',
    parent: 'Home',
    excerpt: false,
    url: '/parent/',
    pluginType: 'eleventy-navigation',
    parentKey: 'Home',
    title: 'Parent page',
    data: {},
    _isBreadcrumb: true,
    children: [
      {
        key: 'child',
        parent: 'parent',
        excerpt: false,
        url: '/parent/child/',
        pluginType: 'eleventy-navigation',
        parentKey: 'parent',
        title: 'Child page',
        _isBreadcrumb: true
      }
    ]
  },
  {
    key: 'child',
    parent: 'parent',
    excerpt: false,
    url: '/parent/child',
    pluginType: 'eleventy-navigation',
    parentKey: 'parent',
    title: 'Child page',
    data: {},
    _isBreadcrumb: true,
    children: false
  }
]

describe('itemsFromNavigation filter', () => {
  it('Converts navigation data to items array', () => {
    const result = itemsFromNavigation(
      eleventyNavigationBreadcrumb,
      '/parent/child'
    )

    assert.deepEqual(result, [
      {
        href: '/',
        text: 'Home',
        order: undefined,
        theme: undefined,
        current: false,
        parent: true,
        children: false
      },
      {
        href: '/parent/',
        text: 'Parent page',
        order: undefined,
        theme: undefined,
        current: false,
        parent: true,
        children: [
          { href: '/parent/child/', text: 'Child page', current: false }
        ]
      },
      {
        href: '/parent/child',
        text: 'Child page',
        order: undefined,
        theme: undefined,
        current: true,
        parent: true,
        children: false
      }
    ])
  })

  it('Converts navigation data to items array without page URL', () => {
    const result = itemsFromNavigation(eleventyNavigationBreadcrumb)

    assert.deepEqual(result, [
      {
        href: '/',
        text: 'Home',
        order: undefined,
        theme: undefined,
        current: false,
        parent: false,
        children: false
      },
      {
        href: '/parent/',
        text: 'Parent page',
        order: undefined,
        theme: undefined,
        current: false,
        parent: false,
        children: [
          { href: '/parent/child/', text: 'Child page', current: false }
        ]
      },
      {
        href: '/parent/child',
        text: 'Child page',
        order: undefined,
        theme: undefined,
        current: false,
        parent: false,
        children: false
      }
    ])
  })

  it('Converts navigation data to items array adding parent site', () => {
    const config = {
      parentSite: { url: 'https://example.org', name: 'Example' }
    }
    const result = itemsFromNavigation(
      eleventyNavigationBreadcrumb,
      '/parent/child',
      config
    )

    assert.deepEqual(result, [
      { href: 'https://example.org', text: 'Example' },
      {
        href: '/',
        text: 'Home',
        order: undefined,
        theme: undefined,
        current: false,
        parent: true,
        children: false
      },
      {
        href: '/parent/',
        text: 'Parent page',
        order: undefined,
        theme: undefined,
        current: false,
        parent: true,
        children: [
          { href: '/parent/child/', text: 'Child page', current: false }
        ]
      },
      {
        href: '/parent/child',
        text: 'Child page',
        order: undefined,
        theme: undefined,
        current: true,
        parent: true,
        children: false
      }
    ])
  })

  it('Converts navigation data to sorted items array', () => {
    const result = itemsFromNavigation(
      eleventyNavigationBreadcrumb,
      '/parent/child',
      {},
      true
    )

    assert.deepEqual(result, [
      {
        href: '/parent/child',
        text: 'Child page',
        order: undefined,
        theme: undefined,
        current: true,
        parent: true,
        children: false
      },
      {
        href: '/',
        text: 'Home',
        order: undefined,
        theme: undefined,
        current: false,
        parent: true,
        children: false
      },
      {
        href: '/parent/',
        text: 'Parent page',
        order: undefined,
        theme: undefined,
        current: false,
        parent: true,
        children: [
          { href: '/parent/child/', text: 'Child page', current: false }
        ]
      }
    ])
  })
})
