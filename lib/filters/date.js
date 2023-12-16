const { DateTime } = require('luxon')

/**
 * Format a data using tokens
 * @param {string} string - Date to convert
 * @param {string} [format] - Optional token-based formatting
 * @returns {string} Formatted date
 * @example date('2022-03-16', 'yyyy') // 2022
 */
module.exports = (string, format) => {
  // Enable special `now` value
  const dateObject = string === 'now' ? DateTime.local().toJSDate() : string

  // Convert dateObj to Luxon DateTime object, using UTC
  // See: https://11ty.dev/docs/dates/#dates-off-by-one-day
  let date = DateTime.fromJSDate(dateObject, {
    locale: 'en-GB',
    zone: 'utc'
  })

  if (format) {
    // Format date if formatting tokens provided
    // See: https://moment.github.io/luxon/#/formatting?id=table-of-tokens
    date = DateTime.fromISO(date).toFormat(format)
  } else {
    // Format date as ISO 8601
    date = date.toISO()
  }

  return date
}
