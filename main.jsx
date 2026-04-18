import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { i18n } from './i18n.js'

// ─── Dev-mode i18n key parity check ─────────────────────────────
// Asserts that every top-level key in `en` also exists in `vi` and
// vice versa. Catches missing translations at startup, not at runtime
// when a user hits the missing string.
if (import.meta.env.DEV) {
  const enKeys = Object.keys(i18n.en).sort().join(',');
  const viKeys = Object.keys(i18n.vi).sort().join(',');
  if (enKeys !== viKeys) {
    const enSet = new Set(Object.keys(i18n.en));
    const viSet = new Set(Object.keys(i18n.vi));
    const missingInVi = [...enSet].filter(k => !viSet.has(k));
    const missingInEn = [...viSet].filter(k => !enSet.has(k));
    console.warn('[i18n] Key parity mismatch:', { missingInVi, missingInEn });
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
