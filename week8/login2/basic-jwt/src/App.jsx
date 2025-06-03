import React from 'react'
import Login from './Login'
import Dashboard from './Dashboard';
import { BrowserRouter, Routes, Route, Link } from "react-router";
export default function App() {
  return (
    <div>
      <Link to="/login">Login</Link> | <Link to="/dashboard">Dashboard</Link>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </div>
  )
}
