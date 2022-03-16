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
}]

test('Converts navigation data to GOV.UK frontend component items array', t => {
  const result = itemsFromNavigation(eleventyNavigationBreadcrumb, '/parent/')

  t.deepEqual(result, [{
    href: '/',
    text: 'Home',
    current: false,
    parent: true,
    children: false
  }, {
    href: '/parent/',
    text: 'Parent page',
    current: true,
    parent: true,
    children: [{
      href: '/parent/child/',
      text: 'Child page',
      current: false
    }]
  }])
})
