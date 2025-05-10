import assert from 'node:assert/strict'
import { describe, it } from 'node:test'

import { itemsFromCollection } from '../../src/filters/items-from-collection.js'

const collectionData = [
  { data: { title: 'Home', url: '/' } },
  { data: { title: 'Page', url: '/page/' } }
]

describe('itemsFromCollection filter', () => {
  it('Converts collection data to items array', (t) => {
    const result = itemsFromCollection(collectionData)

    assert.deepEqual(result, [
      { href: '/', text: 'Home' },
      { href: '/page/', text: 'Page' }
    ])
  })
})
