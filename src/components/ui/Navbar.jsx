import React, {useState} from 'react';

import { Link, NavLink } from "react-router-dom";

function Navbar() {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">
                   Home
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded={!isNavCollapsed ? true : false}
                        onClick={handleNavCollapse}
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`}  id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <NavLink
                            activeClassName="active"
                            className="nav-item nav-link"
                            exact
                            to="/search"
                        >
                            Search
                        </NavLink>

                        <NavLink
                            activeClassName="active"
                            className="nav-item nav-link"
                            exact
                            to="/films"
                        >
                            Films
                        </NavLink>
                    </ul>
                </div>
        </nav>
    );
}

export default Navbar;