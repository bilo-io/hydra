// import { useState } from 'react'
import './App.css'

import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import routes from './pages/routes';

import AppNavBar from './components/App/NavBar';
import { ThemeProvider } from './context/ThemeContext';
import { ThemeStyles } from './context/ThemeStyles';


function App() {
  return (
    <div className="" style={{ height: '100vh' }}>
      <ThemeProvider>
        <ThemeStyles />
        <Router>
          <AppNavBar />
          <Routes>
            {
              routes.map((item: { path: string, element: React.ReactElement }) => (
                <Route key={item.path} path={item.path} element={item.element} />
              ))
            }
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  )
}

export default App
