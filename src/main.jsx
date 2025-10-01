import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Carrito } from './Carrito'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Carrito/>
  </StrictMode>,
)
