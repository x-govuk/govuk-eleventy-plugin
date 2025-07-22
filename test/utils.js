import assert from 'node:assert/strict'
import fs from 'node:fs/promises'
import { describe, it } from 'node:test'

import { getFileContents, getTemplates, normalise, getTitle } from '../src/utils.js'

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
  const eleventyConfig = { dir: { input: 'docs', layouts: 'layouts' } }

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
      if (filePath === 'docs/layouts/page.njk') {
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

describe('getTitle utility', () => {
  it('Returns the extracted title from markdown', () => {
    // arrange
    const data = { page: { rawInput: '# Test Title' }, options: { useMarkdownHeaderAsTitle: true } }

    //act
    const result = getTitle(data)

    // assert
    assert.equal(result, 'Test Title')
  })

  it('Returns the extracted title from markdown regardless of additional text formatting', () => {
    // arrange
    const data = { page: { rawInput: '# Test Title **bold** `stuff`' }, options: { useMarkdownHeaderAsTitle: true } }

    // act
    const result = getTitle(data)

    // assert
    assert.equal(result, 'Test Title bold stuff')
  })

  it('Returns explicit title if provided and options.useMarkdownHeaderAsTitle is true', () => {
    // arrange
    const data = { title: 'Explicit Title', page: { rawInput: '# Test Title' }, options: { useMarkdownHeaderAsTitle: true } }

    // act
    const result = getTitle(data)

    // assert
    assert.equal(result, 'Explicit Title')
  })

  it('Returns explicit title if provided and options.useMarkdownHeaderAsTitle is false', () => {
    // arrange
    const data = { title: 'Explicit Title', page: { rawInput: '# Test Title' }, options: { useMarkdownHeaderAsTitle: false } }

    // act
    const result = getTitle(data)

    // assert
    assert.equal(result, 'Explicit Title')
  })

  it('Returns null if no title can be extracted', () => {
    // arrange
    const data = { page: { rawInput: '' }, options: { useMarkdownHeaderAsTitle: true } }

    // act
    const result = getTitle(data)

    // assert
    assert.equal(result, null)
  })

  it('Returns undefined if eleventyExcludeFromCollections is true', () => {
    // arrange
    const data = { eleventyExcludeFromCollections: true, page: { rawInput: '# Test Title' }, options: { useMarkdownHeaderAsTitle: true } }

    // act
    const result = getTitle(data)

    // assert
    assert.equal(result, undefined)
  })

  it('Returns undefined if options.useMarkdownHeaderAsTitle is false and no title is explicitly set', () => {
    // arrange
    const data = { page: { rawInput: '# Test Title' }, options: { useMarkdownHeaderAsTitle: false } }

    // act
    const result = getTitle(data)

    // assert
    assert.equal(result, undefined)
  })
})