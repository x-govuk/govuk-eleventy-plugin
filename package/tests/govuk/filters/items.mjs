import test from 'ava'
import items from '../../../govuk/filters/items.js'

const eleventyNavigationBreadcrumb = [{
  key: 'Home',
  parent: false,
  excerpt: 'The familiarity of the [GOV.UK Design System](https://design-system.service.gov.uk) combined with the simplicity of the [Eleventy](https://www.11ty.dev) static site generator.',
  url: '/',
  pluginType: 'eleventy-navigation',
  title: 'Home',
  _isBreadcrumb: true
}, {
  key: 'Layouts',
  parent: 'Home',
  excerpt: false,
  url: '/layouts/',
  pluginType: 'eleventy-navigation',
  parentKey: 'Home',
  title: 'Layouts',
  _isBreadcrumb: true
}]

test('Formats Eleventy navigation to populate govukBreadcrumb component', t => {
  const result = items(eleventyNavigationBreadcrumb);

  t.deepEqual(result, [{
    href: '/',
    text: 'Home',
  }, {
    href: '/layouts/',
    text: 'Layouts',
  }]);
});
