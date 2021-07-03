import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';

import Login from './pages/Login';
import Portfolio from './pages/Portfolio';
import Explore from './pages/Explore';
import ExploreDetails from './pages/ExploreDetails';
import Error from './pages/Error';
import Stats from './pages/Stats';

import './App.scss';
import Navbar from './components/Navbar';
import AppMenu from 'components/AppMenu';

function App() {
  const [isAppMenuOpen, setAppMenuOpen] = useState<boolean>(false)
  const toggleAppMenu = () => {
    setAppMenuOpen(!isAppMenuOpen)
  }
  return (
    <Router>
      <Navbar onToggle={toggleAppMenu} />
      <AppMenu isOpen={isAppMenuOpen} isDark onToggle={toggleAppMenu} />
      <div className="page">
      <Switch>
        <Route
            exact
            path={'/'}
            render={() => <Redirect to={'/portfolio'} />}
        />


        <Route path="/login" component={Login} />
        <Route path="/portfolio" component={Portfolio} />
        <Route exact path="/explore" component={Explore} />
        <Route path="/explore/:id" component={ExploreDetails} />
        <Route path="/stats" component={Stats} />
        <Route path="*" component={Error} />
        </Switch>
        </div>
    </Router>
  );
}

export default App;

const DemoApp = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  )
}