import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppState } from '../../store';
import SignInLinks from './SignInLinks';
import SignOutLinks from './SignOutLinks';

const Navbar = () => {

    const { token } = useSelector((state: AppState) => state.signReducer)
    const links = token ? <SignInLinks token={token} /> : <SignOutLinks />

    return (
        <div className="navbar-fixed">
            <nav className="nav-wrapper blue-grey darken-4">
                <Link to="/" className="brand-logo center">Mateusz Kleszcz</Link>
                <ul className="left">
                    <li><Link to='/player'>Player</Link></li>
                </ul>
                <ul className="right">
                    {links}
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;