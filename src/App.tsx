import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

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

                {/* mobile */}
                <Navbar onToggle={toggleAppMenu} className='navbar' />

                {/* Desktop */}
                <Navbar onToggle={toggleAppMenu} className='mobile-navbar' />

                <AppMenu isOpen={isAppMenuOpen} isDark onToggle={toggleAppMenu} />

                <div className="page">
                    <Switch>
                        <Route
                            exact
                            path={'/'}
                            render={() => <Redirect to={'/stats'} />}
                        />

                        <Route path="/login" component={Login} />
                        <Route path="/products" component={Products} />
                        <Route exact path="/explore" component={Explore} />
                        <Route path="/explore/:id" component={ExploreDetails} />
                        <Route path="/stats" component={Stats} />
                        <Route path="/news" component={News} />
                        <Route path="*" component={Error} />
                    </Switch>
                </div>
            </div>
        </Router>
    )
}

export default App
