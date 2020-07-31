import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signOut } from '../../actions/signActions/signOut';

interface SignInLinksProps {
    token: string
}

const SignInLinks = ({ token }: SignInLinksProps) => {

    const dispatch = useDispatch()

    const handleSignOut = () => {
        dispatch(signOut(token))
    }

    return (
        <>
            <li><div onClick={handleSignOut}>Signout</div></li>
            <li><NavLink to='/profile'>Profile</NavLink></li>
        </>
    );
};

export default SignInLinks;