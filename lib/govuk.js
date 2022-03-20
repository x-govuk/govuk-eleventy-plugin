// Import GOV.UK Frontend
import GOVUKFrontend from 'govuk-frontend'

// Import plugin components
import { components as GOVUK11ty } from '../components/all.js'

// Initiate scripts on page load
document.addEventListener('DOMContentLoaded', () => {
  GOVUKFrontend.initAll()
  GOVUK11ty.initAll()
})
