import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { HomePage } from './pages'
import Layout from './layout/Layout'
import { LanguageProvider } from './contexts/'

const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/*", element: <Navigate to="/" /> }
]

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <LanguageProvider>
      <Layout>
        <Routes>
          {routes.map(route => (
            <Route key={ route.path } path={ route.path } element={ route.element } />
          ))}
        </Routes>
      </Layout>
    </LanguageProvider>
  </BrowserRouter>
)