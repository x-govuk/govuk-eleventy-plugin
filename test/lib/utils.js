import assert from 'node:assert/strict'
import fs from 'node:fs/promises'
import { describe, it } from 'node:test'

import { getFileContents, getTemplates, normalise } from '../../lib/utils.js'

describe('getFileContents utility', () => {
  it('Gets file contents', async (t) => {
    const testContent = 'Test file content'
    t.mock.method(fs, 'readFile', async () => testContent)

    const result = await getFileContents('/file/path.txt')
    assert.strictEqual(result, testContent)
  })

  it('Throws error getting content for non-existent file', async () => {
    await assert.rejects(
      () => getFileContents('non-existent-file.txt'),
      (error) => {
        assert.ok(error instanceof Error)
        assert.ok(error.message.includes('ENOENT'))
        return true
      }
    )
  })
})

describe('getTemplates utility', () => {
  const eleventyConfig = { dir: { input: 'src', layouts: 'layouts' } }

  it('Gets all virtual templates', async () => {
    const result = await getTemplates(eleventyConfig)

    assert.deepEqual(Object.keys(result), [
      'layouts/base.njk',
      'layouts/collection.njk',
      'layouts/feed.njk',
      'layouts/page.njk',
      'layouts/post.njk',
      'layouts/product.njk',
      'layouts/search-index.njk',
      'layouts/sitemap.njk',
      'layouts/sub-navigation.njk',
      'layouts/tag.njk',
      'layouts/tags.njk'
    ])
  })

  it('Ignores virtual template if layout exists', async (t) => {
    t.mock.method(fs, 'stat', (filePath) => {
      if (filePath === 'src/layouts/page.njk') {
        return Promise.resolve()
      }

      throw new Error('ENOENT: no such file or directory')
    })

    const result = await getTemplates(eleventyConfig)

    assert.deepEqual(Object.keys(result), [
      'layouts/base.njk',
      'layouts/collection.njk',
      'layouts/feed.njk',
      'layouts/post.njk',
      'layouts/product.njk',
      'layouts/search-index.njk',
      'layouts/sitemap.njk',
      'layouts/sub-navigation.njk',
      'layouts/tag.njk',
      'layouts/tags.njk'
    ])
  })
})

describe('normalise utility', () => {
  it('Normalises value provided to a filter', () => {
    const usesValue = normalise('Dollars', 'Pounds')
    const usesDefault = normalise(undefined, 'Pounds')

    assert.equal(usesValue, 'Dollars')
    assert.equal(usesDefault, 'Pounds')
  })
})
