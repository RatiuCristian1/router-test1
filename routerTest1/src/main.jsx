import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './index.css'
import About from './pages/About.jsx'
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to="/" className='app--logo'>Caravan World</Link>
        <nav>
          <Link to="/about">About</Link>
        </nav>
      </header>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
    </Routes>
  </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
