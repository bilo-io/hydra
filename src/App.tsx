import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router'

import Login from './pages/Login'
import Products from './pages/Products'
import Explore from './pages/Explore'
import ExploreDetails from './pages/ExploreDetails'
import Error from './pages/Error'
import News from './pages/News'
import Stats from './pages/Stats'

import './App.scss'
import Navbar from './components/Navbar'
import AppMenu from 'components/AppMenu'

const App = () => {
  const [isAppMenuOpen, setAppMenuOpen] = useState<boolean>(false)
  const toggleAppMenu = () => {
    setAppMenuOpen(!isAppMenuOpen)
  }
  return (
    <Router>
      <div className="flex-row">

        <Navbar type='desktop' onToggle={toggleAppMenu} />
        <Navbar type='mobile' onToggle={toggleAppMenu} />

        <AppMenu isOpen={isAppMenuOpen} isDark onToggle={toggleAppMenu} />

        <div className="page">
          <Routes>
            <Route path="/" element={<Navigate to="/stats" replace />} />

            <Route path="/login/*" element={<Login />} />
            <Route path="/products/*" element={<Products />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/explore/:id/*" element={<ExploreDetails />} />
            <Route path="/stats/*" element={<Stats />} />
            <Route path="/news/*" element={<News />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
