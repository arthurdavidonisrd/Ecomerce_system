import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { router } from './App'
import {RouterProvider} from 'react-router-dom'
import './index.css'

import CartProvider from './context/CartContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>,
)
