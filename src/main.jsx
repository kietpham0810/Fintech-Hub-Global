import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css' // DÒNG NÀY SỐNG CÒN, THIẾU NÓ LÀ WEB MÙ MÀU

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)