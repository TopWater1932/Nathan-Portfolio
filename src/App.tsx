import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import LandingPage from './pages/LandingPage'
import BlogPage from './pages/BlogPage'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/blog" element={<BlogPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
