// import { useState } from 'react'
import './App.css'
import './config/i18n/i18n'; // Initialize i18n

import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import routes from './pages/routes';

import AppNavBar from './components/App/NavBar';
import { ThemeProvider } from './context/ThemeContext';
import { ThemeStyles } from './context/ThemeStyles';
import { View } from './components/Core';


function App() {
  return (
    <div className="" style={{ height: '100vh' }}>
      <ThemeProvider>
        <ThemeStyles />
        <Router>
          <View className="w-full flex flex-row">
            <AppNavBar />
            <Routes>
              {
                routes.map((item: { path: string, element: React.ReactElement }) => (
                  <Route key={item.path} path={item.path} element={item.element} />
                ))
              }
            </Routes>
          </View>
        </Router>
      </ThemeProvider>
    </div>
  )
}

export default App
