// import { useState } from 'react'
import './App.css'

import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import routes from './pages/routes';

import AppNavBar from './components/App/NavBar';


function App() {
  return (
    <div className="" style={{ height: '100vh' }}>
      <Router>
        <AppNavBar />
        <Routes>
          {
            routes.map((item: { path: string, element: React.ReactElement }) => (
              <Route path={item.path} element={item.element} />
            ))
          }
        </Routes>
      </Router>
    </div>
  )
}

export default App
