import React from 'react';
import { Link } from 'react-router-dom';

const SignOutLinks = () => {
    return (
        <>
            <li><Link to="/signin">Sign In</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
        </>
    );
};

export default SignOutLinks;