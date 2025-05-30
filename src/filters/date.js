import { normalise } from '../utils.js'

/**
 * Format ISO 8601 date string into a date with the GOV.UK style
 *
 * @param {string} string - Date
 * @returns {string} `string` as a date with the GOV.UK style
 */
export function govukDate(string) {
  string = normalise(string, '')

  try {
    const date = Date.parse(string)

    // 2021-08-17 => 17 August 2021
    const formattedDate = new Intl.DateTimeFormat('en-GB', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date)

    return formattedDate
  } catch (error) {
    return error.message.split(':')[0]
  }
}

/**
 * Format string into an ISO 8601 date
 *
 * @param {string} string - String
 * @returns {string} ISO 8601 date
 */
export function isoDate(string) {
  string = normalise(string, '')

  if (!string) {
    return
  }

  try {
    const date = new Date(string)

    return date.toISOString()
  } catch (error) {
    return error.message.split(':')[0]
  }
}
