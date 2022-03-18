import test from 'ava'
import itemsFromCollection from '../../../lib/filters/items-from-collection.js'

const collectionData = [{
  data: {
    title: 'Home',
    url: '/'
  }
}, {
  data: {
    title: 'Page',
    url: '/page/'
  }
}]

test('Converts collection data to items array', t => {
  const result = itemsFromCollection(collectionData)

  t.deepEqual(result, [{
    href: '/',
    text: 'Home'
  }, {
    href: '/page/',
    text: 'Page'
  }])
})
