import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles.css'

declare global {
  interface Window { Telegram: any }
}

if (window.Telegram?.WebApp) {
  const tg = window.Telegram.WebApp
  tg.expand()
  tg.ready()
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)