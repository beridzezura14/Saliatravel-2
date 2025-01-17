import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './main.scss'
import './pageStyle.scss'

import './components/style.scss'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)