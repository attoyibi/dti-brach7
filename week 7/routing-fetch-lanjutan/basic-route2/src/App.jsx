import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import Products from './pages/ProductPage'
export default function App() {
  return (
    <div>
      <nav>
        {/* jsx buatan dari react */}
        <link></link>
        {/* link ini dari react router dom */}
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
        <div>
          <Link to="/product/1">Product 1</Link> |
          <Link to="/product/2">Product 2</Link> |
          <Link to="/product/3">Product 3</Link> |
          <Link to="/product/b87f8c8e-4d6c-4dbe-a3d1-3a9e3fd74f5c">Product 4</Link> |
          <Link to="/product/1748529766822">Product 5</Link> |
        </div>
      </nav>
      {/* yang berganti hanya di dalam routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/product" element={<Products />} />
        <Route path="/productDetail/:id" element={<Products />} />
      </Routes>
      <footer>ini footer tidak berganti</footer>
    </div>
  )
}
