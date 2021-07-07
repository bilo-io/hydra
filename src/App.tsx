import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import Login from './pages/Login'
import Portfolio from './pages/Portfolio'
import Explore from './pages/Explore'
import ExploreDetails from './pages/ExploreDetails'
import Error from './pages/Error'
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
    )
}

export default App
