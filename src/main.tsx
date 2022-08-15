import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import App from './App'
import theme from './assets/styles/theme'
import { AuthProvider } from './contexts/auth'
import { BugpointsProvider } from './contexts/bugpoints'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <BugpointsProvider>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </BugpointsProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
)
