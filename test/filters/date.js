import assert from 'node:assert/strict'
import { describe, it } from 'node:test'

import { govukDate, isoDate } from '../../src/filters/date.js'

describe('Date filter', () => {
  it('Formats ISO 8601 date string into a date with the GOV.UK style', () => {
    const result = govukDate('2021-12-27')

    assert.equal(result, '27 December 2021')
  })

  it('Format string into an ISO 8601 date', () => {
    const result = isoDate('2021-12-27')

    assert.equal(result, '2021-12-27T00:00:00.000Z')
  })
})
