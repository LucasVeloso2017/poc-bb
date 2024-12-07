import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRoutes from './routes.tsx'
import { GlobalStyles } from './styles/global.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyles/>
    <AppRoutes/>
  </StrictMode>,
)
