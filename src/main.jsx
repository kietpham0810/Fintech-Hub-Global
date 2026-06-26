import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'
import './index.css' // DÒNG NÀY SỐNG CÒN, THIẾU NÓ LÀ WEB MÙ MÀU

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error(
    'Root element not found. Ensure index.html contains a <div id="root"></div>.'
  )
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
)