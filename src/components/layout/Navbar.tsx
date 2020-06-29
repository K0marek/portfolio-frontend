import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <div>
                <Link to='/player' className="brand-logo">Player</Link>
            </div>
        </nav>
    );
};

export default Navbar;