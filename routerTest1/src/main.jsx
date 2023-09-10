import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './index.css'
import Navbar from './pages/Navbar.jsx'
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
    <Link to="/">Home</Link>
    <Link to="/navbar">Navbar</Link>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/navbar' element={<Navbar />} />
    </Routes>
  </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
