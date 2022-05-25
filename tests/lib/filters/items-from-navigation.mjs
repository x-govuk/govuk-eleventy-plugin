import test from 'ava'
import itemsFromNavigation from '../../../lib/filters/items-from-navigation.js'

const eleventyNavigationBreadcrumb = [{
  key: 'Home',
  parent: false,
  excerpt: 'The familiarity of the [GOV.UK Design System](https://design-system.service.gov.uk) combined with the simplicity of the [Eleventy](https://www.11ty.dev) static site generator.',
  url: '/',
  pluginType: 'eleventy-navigation',
  title: 'Home',
  _isBreadcrumb: true
}, {
  key: 'parent',
  parent: 'Home',
  excerpt: false,
  url: '/parent/',
  pluginType: 'eleventy-navigation',
  parentKey: 'Home',
  title: 'Parent page',
  _isBreadcrumb: true,
  children: [{
    key: 'child',
    parent: 'parent',
    excerpt: false,
    url: '/parent/child/',
    pluginType: 'eleventy-navigation',
    parentKey: 'parent',
    title: 'Child page',
    _isBreadcrumb: true
  }]
}, {
  key: 'child',
  parent: 'parent',
  excerpt: false,
  url: '/parent/child',
  pluginType: 'eleventy-navigation',
  parentKey: 'parent',
  title: 'Child page',
  _isBreadcrumb: true,
  children: false
}]

test('Converts navigation data to items array', t => {
  const result = itemsFromNavigation(eleventyNavigationBreadcrumb, '/parent/child')

  t.deepEqual(result, [{
    href: '/',
    text: 'Home',
    current: false,
    parent: true,
    children: false
  }, {
    href: '/parent/',
    text: 'Parent page',
    current: false,
    parent: true,
    children: [{
      href: '/parent/child/',
      text: 'Child page',
      current: false
    }]
  }, {
    text: 'Child page',
    current: true,
    parent: true,
    children: false
  }])
})

test('Converts navigation data to items array without page URL', t => {
  const result = itemsFromNavigation(eleventyNavigationBreadcrumb)

  t.deepEqual(result, [{
    href: '/',
    text: 'Home',
    current: false,
    parent: false,
    children: false
  }, {
    href: '/parent/',
    text: 'Parent page',
    current: false,
    parent: false,
    children: [{
      href: '/parent/child/',
      text: 'Child page',
      current: false
    }]
  }, {
    href: '/parent/child',
    text: 'Child page',
    current: false,
    parent: false,
    children: false
  }])
})

test('Converts navigation data to items array using path prefix', t => {
  const config = {
    pathPrefix: '/prefix/'
  }
  const result = itemsFromNavigation(eleventyNavigationBreadcrumb, '/parent/child', config)

  t.deepEqual(result, [{
    href: '/prefix/',
    text: 'Home',
    current: false,
    parent: true,
    children: false
  }, {
    href: '/prefix/parent/',
    text: 'Parent page',
    current: false,
    parent: true,
    children: [{
      href: '/prefix/parent/child/',
      text: 'Child page',
      current: false
    }]
  }, {
    text: 'Child page',
    current: true,
    parent: true,
    children: false
  }])
})

test('Converts navigation data to items array adding parent site', t => {
  const config = {
    parentSite: {
      url: 'https://example.org',
      name: 'Example'
    }
  }
  const result = itemsFromNavigation(eleventyNavigationBreadcrumb, '/parent/child', config)

  t.deepEqual(result, [{
    href: 'https://example.org',
    text: 'Example'
  }, {
    href: '/',
    text: 'Home',
    current: false,
    parent: true,
    children: false
  }, {
    href: '/parent/',
    text: 'Parent page',
    current: false,
    parent: true,
    children: [{
      href: '/parent/child/',
      text: 'Child page',
      current: false
    }]
  }, {
    text: 'Child page',
    current: true,
    parent: true,
    children: false
  }])
})

test('Converts navigation data to items array adding parent site and using path prefix', t => {
  const config = {
    parentSite: {
      url: 'https://example.org',
      name: 'Example'
    },
    pathPrefix: '/prefix/'
  }
  const result = itemsFromNavigation(eleventyNavigationBreadcrumb, '/parent/child', config)

  t.deepEqual(result, [{
    href: 'https://example.org',
    text: 'Example'
  }, {
    href: '/prefix/',
    text: 'Home',
    current: false,
    parent: true,
    children: false
  }, {
    href: '/prefix/parent/',
    text: 'Parent page',
    current: false,
    parent: true,
    children: [{
      href: '/prefix/parent/child/',
      text: 'Child page',
      current: false
    }]
  }, {
    text: 'Child page',
    current: true,
    parent: true,
    children: false
  }])
})
