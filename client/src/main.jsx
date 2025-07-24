import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ParallaxProvider } from 'react-scroll-parallax';

import {BrowserRouter} from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <BrowserRouter>
    <ParallaxProvider>

    <App />
    </ParallaxProvider>
    </BrowserRouter>
  </StrictMode>,
)
