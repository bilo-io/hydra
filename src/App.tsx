// import { useState } from 'react'
// import './App.css'

import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import routes from './pages/routes'

function App() {
  return (
    <Router>
      <Routes>
        {
          routes.map((item: { path: string, element: React.ReactElement }) => (
            <Route path={item.path} element={item.element} />
          ))
        }
      </Routes>
    </Router>
  )
}

export default App
