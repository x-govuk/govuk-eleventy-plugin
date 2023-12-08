import { strict as assert } from 'node:assert'
import { describe, it } from 'node:test'
import date from '../../../lib/filters/date.js'

describe('Date filter', () => {
  it('Formats a date using tokens', () => {
    const result = date(new Date('2021-12-27'), 'd LLLL yyyy')

    assert.equal(result, '27 December 2021')
  })

  it('Formats the date right now', () => {
    const now = Math.round(Date.now() / 1000)
    const result = Math.round(date('now', 'x') / 1000)

    assert.equal(result, now)
  })
})
