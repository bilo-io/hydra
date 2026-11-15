import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router';
import './config/i18n/i18n';

import Login from './pages/Login';
import Products from './pages/Products';
import Explore from './pages/Explore';
import ExploreDetails from './pages/ExploreDetails';
import Error from './pages/Error';
import News from './pages/News';
import Stats from './pages/Stats';
import Profile from './pages/Profile';
import Portfolio from './pages/Portfolio';
import Currencies from './pages/currencies';
import Trade from './pages/trade';
import Transactions from './pages/transactions';
import Charts from './pages/charts';
import Settings from './pages/settings';

import './App.scss';
import Navbar from './components/Navbar';
import AppMenu from 'components/AppMenu';
import { ThemeProvider } from './context/ThemeContext';
import { ThemeStyles } from './context/ThemeStyles';

const App = () => {
  const [isAppMenuOpen, setAppMenuOpen] = useState<boolean>(false);
  const toggleAppMenu = () => {
    setAppMenuOpen((v) => !v);
  };

  return (
    <ThemeProvider>
      <ThemeStyles />
      <Router>
        <div className="ambient-wash flex h-screen w-full overflow-hidden bg-background text-foreground">
          <Navbar type="desktop" onToggle={toggleAppMenu} />
          <Navbar type="mobile" onToggle={toggleAppMenu} />

          <AppMenu isOpen={isAppMenuOpen} isDark onToggle={toggleAppMenu} />

          <main className="min-w-0 flex-1 overflow-y-auto pb-20 pt-14 md:pb-6 md:pt-0">
            <Routes>
              <Route path="/" element={<Portfolio />} />
              <Route path="/portfolio/*" element={<Portfolio />} />
              <Route path="/currencies/*" element={<Currencies />} />
              <Route path="/trade/*" element={<Trade />} />
              <Route path="/transactions/*" element={<Transactions />} />
              <Route path="/charts/*" element={<Charts />} />
              <Route path="/settings/*" element={<Settings />} />

              <Route path="/login/*" element={<Login />} />
              <Route path="/products/*" element={<Products />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/explore/:id/*" element={<ExploreDetails />} />
              <Route path="/stats/*" element={<Stats />} />
              <Route path="/news/*" element={<News />} />
              <Route path="/profile/*" element={<Profile />} />
              <Route path="/app/identity/profile/*" element={<Profile />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
