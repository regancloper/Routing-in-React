import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="nav justify-content-center align-items-center p-2 shadow">
            <NavLink exact className="btn btn-outline-primary mx-2" activeClassName="btn btn-primary mx-2 text-white" to="/">Go Home</NavLink>
            <NavLink exact className="btn btn-outline-secondary mx-2" activeClassName="btn btn-secondary mx-2 text-white" to="/films">View Films</NavLink>
            <NavLink exact className="btn btn-outline-success mx-2" activeClassName="btn btn-success mx-2 text-white" to="/people">View People</NavLink>
        </nav>
    );
}

export default Navbar;