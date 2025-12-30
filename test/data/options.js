import assert from 'node:assert/strict'
import { describe, it } from 'node:test'

import { defaultPluginOptions } from '../../src/data/options.js'

describe('defaultPluginOptions', () => {
  it('Sets default scripts to empty array', () => {
    const result = defaultPluginOptions({}, '/')

    assert.deepEqual(result.scripts, [])
  })

  it('Preserves custom scripts array', () => {
    const scripts = ['/custom.js', '/another.js']
    const result = defaultPluginOptions({ scripts }, '/')

    assert.deepEqual(result.scripts, scripts)
  })

  it('Sets default stylesheets to empty array', () => {
    const result = defaultPluginOptions({}, '/')

    assert.deepEqual(result.stylesheets, [])
  })

  it('Preserves custom stylesheets array', () => {
    const stylesheets = ['/custom.css', '/another.css']
    const result = defaultPluginOptions({ stylesheets }, '/')

    assert.deepEqual(result.stylesheets, stylesheets)
  })
})
