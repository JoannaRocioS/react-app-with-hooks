import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch, NavLink } from "react-router-dom"
import ContactUs from './ContactUs'
import AboutUs from './AboutUs'
import Menu from './Menu'

function Header() {
    return (
        <Router>
            <div className="header">
                <div>
                    <Link to="/" className="button buttonBlue">
                        Menu
                    </Link>
                    <Link to="/aboutUs" className="button buttonBlue">
                        Nosotros
                    </Link>
                    <NavLink to="/contactUs" className="button buttonBlue" activeClassName="active">
                        Contacto
                    </NavLink>
                </div>
                <hr/>           
                <Switch>
                    <Route path="/" exact>
                        <Menu />
                    </Route>
                    <Route path="/aboutUs">
                        <AboutUs />
                    </Route>
                    <Route path="/contactUs">
                        <ContactUs />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default Header;