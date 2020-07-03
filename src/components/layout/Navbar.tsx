import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar-fixed">
            <nav className="nav-wrapper">
                <Link to="/" className="brand-logo center">Mateusz Kleszcz</Link>
                <ul className="left">
                    <li><Link to='/player'>Player</Link></li>
                </ul>
                <ul className="right">
                    <li><Link to="/signin">Sign In</Link></li>
                    <li><Link to="/signup">Sign Up</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;