import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import RedirectHash from './pages/RedirectHash'

export const App = () => {
  return (
    <main>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<RedirectHash hash='intro' />} />
          <Route path='/projects' element={<RedirectHash hash='work' />} />
          <Route path='/contact' element={<RedirectHash hash='contact' />} />
        </Routes>
      </Router>
    </main>
  )
}
