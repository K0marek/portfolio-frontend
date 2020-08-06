import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppState } from '../../store';
import SignInLinks from './SignInLinks';
import SignOutLinks from './SignOutLinks';
import M from 'materialize-css'

const Navbar = () => {

    const { token } = useSelector((state: AppState) => state.signReducer)
    const links = token ? <SignInLinks token={token} /> : <SignOutLinks />

    useEffect(() => {
        const sidenav = document.querySelectorAll('.sidenav')
        M.Sidenav.init(sidenav)
    }, [])

    return (
        <div className="navbar-fixed">

            <nav className="nav-wrapper blue-grey darken-4">
                <Link to="/" className="brand-logo center">Mateusz Kleszcz</Link>
                <a href="#" className="sidenav-trigger" data-target="mobile-links">
                    <i className="material-icons">menu</i>
                </a>
                <ul className="left hide-on-med-and-down">
                    <li><Link to='/player'>Player</Link></li>
                </ul>
                <ul className="right hide-on-med-and-down">
                    {links}
                </ul>
            </nav>

            <ul className="sidenav" id="mobile-links">
                <li><Link to='/player'>Player</Link></li>
                {links}
            </ul>

        </div>
    );
};

export default Navbar;