import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import LandingPage from './pages/LandingPage'
import BlogPage from './pages/BlogPage'
import BlogArticlePage from './pages/BlogArticlePage'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/Nathan-Portfolio" element={<LandingPage />} />
            <Route path="/Nathan-Portfolio/blog" element={<BlogPage />} />
            <Route path="/Nathan-Portfolio/blog/:id" element={<BlogArticlePage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
