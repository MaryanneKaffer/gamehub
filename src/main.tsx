import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from "react-router-dom";
import { HeroUIProvider } from "@heroui/system";

createRoot(document.getElementById('root')!).render(
  <HeroUIProvider>
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  </HeroUIProvider>
)
