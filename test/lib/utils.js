import assert from 'node:assert/strict'
import fs from 'node:fs/promises'
import path from 'node:path'
import { describe, it } from 'node:test'

import {
  getFileContents,
  getScssSettings,
  getTemplates,
  normalise
} from '../../lib/utils.js'

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

describe('getScssSettings utility', async (t) => {
  const mockDir = { input: '/test' }
  const defaultContent = '// Default settings'
  const customPath = 'custom/settings.scss'
  const customContent = '// Custom settings'

  it('Returns SCSS settings file found at default path', async (t) => {
    const expectedPath = path.join(mockDir.input, 'sass', '_settings.scss')

    t.mock.method(fs, 'access', (filePath, mode) => {
      assert.strictEqual(filePath, expectedPath)
      assert.strictEqual(mode, fs.constants.R_OK)
      return Promise.resolve()
    })

    t.mock.method(fs, 'readFile', (filePath, options) => {
      assert.strictEqual(filePath, expectedPath)
      assert.deepStrictEqual(options, { encoding: 'utf8' })
      return Promise.resolve(defaultContent)
    })

    const result = await getScssSettings(mockDir)
    assert.strictEqual(result, defaultContent)
  })

  it('Returns SCSS settings file found at custom path', async (t) => {
    t.mock.method(fs, 'access', () => Promise.resolve())
    t.mock.method(fs, 'readFile', async () => customContent)

    const result = await getScssSettings(mockDir, customPath)
    assert.strictEqual(result, customContent)
  })

  it('Returns undefined if file at default path missing', async (t) => {
    t.mock.method(fs, 'access', async () => {
      throw new Error('File not found')
    })

    const result = await getScssSettings(mockDir)
    assert.strictEqual(result, undefined)
  })

  it('Logs error if file at custom path missing', async (t) => {
    const expectedPath = `${mockDir.input}/404.scss`
    const fsError = new Error('File not found')
    fsError.path = expectedPath

    t.mock.method(fs, 'access', async () => {
      throw fsError
    })
    t.mock.method(console, 'error', () => {})

    const result = await getScssSettings(mockDir, '404.scss')

    assert.equal(result, undefined)
    assert.deepEqual(console.error.mock.calls[0].arguments, [
      `Could not find SCSS settings at ${expectedPath}`
    ])
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
