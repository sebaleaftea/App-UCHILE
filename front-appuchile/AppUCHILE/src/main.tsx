import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Button from './components/button.jsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Button></Button>
    <App />
  </StrictMode>,
)
