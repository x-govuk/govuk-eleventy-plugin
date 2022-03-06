import test from 'ava'
import date from '../../../govuk/filters/date.js'

test('Formats a data using tokens', t => {
  const result = date(new Date('2021-12-27'), 'd LLLL yyyy')

  t.is(result, '27 December 2021')
})

test('Formats the date right now', t => {
  const now = Math.round(Date.now() / 1000)
  const result = Math.round(date('now', 'x') / 1000)

  t.is(result, now)
})
