import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext.jsx'
import { ArticleProvider } from './context/ArticleContext.jsx'

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <ArticleProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ArticleProvider>
  </AuthProvider>,
)
