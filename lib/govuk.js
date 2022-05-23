// Import GOV.UK Frontend
import { initAll as GOVUKFrontend } from 'govuk-frontend'

// Import plugin components
import { initAll as GOVUK11ty } from '../components/all.js'

// Initiate scripts on page load
document.addEventListener('DOMContentLoaded', () => {
  GOVUKFrontend()
  GOVUK11ty()
})
