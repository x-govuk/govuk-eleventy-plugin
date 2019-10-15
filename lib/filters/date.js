const { DateTime } = require('luxon')

/**
 * Format a data using tokens
 *
 * @param {String} dateObj Date to convert
 * @param {String} format Token-based formatting.
 * @example {{ date | date("OPTIONAL FORMAT STRING") }}
 *
 * @see {@link https://moment.github.io/luxon/docs/manual/formatting.html#table-of-tokens List of supported tokens}
 */
module.exports = (dateObj, format = 'yyyy-LL-dd\'T\'HH:mm:ss.SSSZZ') => {
  return DateTime.fromJSDate(dateObj, {
    locale: 'en-GB',
    zone: 'utc'
  }).toFormat(format)
}
