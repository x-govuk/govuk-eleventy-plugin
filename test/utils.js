import assert from 'node:assert/strict'
import fs from 'node:fs/promises'
import { describe, it } from 'node:test'

import { getFileContents, getLayoutTemplates, normalise } from '../src/utils.js'

describe('getFileContents utility', () => {
  it('Gets file contents', async (t) => {
    const testContent = 'Test file content'
    t.mock.method(fs, 'readFile', async () => testContent)

    const result = await getFileContents('files', '/file/path.txt')
    assert.strictEqual(result, testContent)
  })

  it('Throws error getting content for non-existent file', async () => {
    await assert.rejects(
      () => getFileContents('files', 'non-existent-file.txt'),
      (error) => {
        assert.ok(error instanceof Error)
        assert.ok(error.message.includes('ENOENT'))
        return true
      }
    )
  })
})

describe('getLayoutTemplates utility', () => {
  const eleventyConfig = { dir: { input: 'docs', layouts: 'layouts' } }
  const layoutFilenames = ['page.njk', 'post.njk']

  it('Gets virtual templates for default layouts', async () => {
    const result = await getLayoutTemplates(eleventyConfig, layoutFilenames)

    assert.deepEqual(Object.keys(result), [
      'layouts/page.njk',
      'layouts/post.njk'
    ])
  })

  it('Ignores virtual template if layout exists', async (t) => {
    t.mock.method(fs, 'stat', (filePath) => {
      if (filePath === 'docs/layouts/page.njk') {
        return Promise.resolve()
      }

      throw new Error('ENOENT: no such file or directory')
    })

    const result = await getLayoutTemplates(eleventyConfig, layoutFilenames)

    assert.deepEqual(Object.keys(result), ['layouts/post.njk'])
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
