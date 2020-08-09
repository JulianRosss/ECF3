import React from 'react';

import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import Accueil from './Accueil';
import Admin from './Admin';
import Page404 from './Page404';

const Nav = () => {
    return (
        <Router>
            <nav className="navbar navbar-expand-sm bg-warning navbar-dark">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                    <Link className="nav-link" to="/">Public</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/Admin007">Administration</Link>
                    </li>
                </ul>
            </nav>

            <Switch>
                <Route exact path="/">
                    <Accueil />
                </Route>
                <Route path="/Admin007">
                    <Admin />
                </Route>
                <Route path="*">
                    <Page404 />
                </Route>
            </Switch>
        </Router>
    );
}

export default Nav;
