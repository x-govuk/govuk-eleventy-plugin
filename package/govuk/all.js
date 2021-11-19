// Sass entry point for rollup.js
import './all.scss'

// Import GOV.UK Frontend
import GOVUKFrontend from 'govuk-frontend'

// Import GOV.UK Prototype Rig
import { components as GOVUK11ty } from './components/all.js'

// Initiate scripts on page load
document.addEventListener('DOMContentLoaded', () => {
  GOVUKFrontend.initAll()
  GOVUK11ty.initAll()
})
