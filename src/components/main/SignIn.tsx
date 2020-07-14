import React, { useState } from 'react';
import { signIn } from '../../actions/signActions/signIn'
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../store';
import { Redirect } from 'react-router-dom';

const SignIn = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        const login = {
            username,
            password
        }
        dispatch(signIn(login))
    }

    const { token } = useSelector((state: AppState) => state.signReducer)
    if (token) { return <Redirect to='/' /> }

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>): void => setUsername(e.target.value)
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>): void => setPassword(e.target.value)

    return (
        <div className="signIn">
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" value={username} onChange={handleUsernameChange} />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" value={password} onChange={handlePasswordChange} />
                <input type="submit" value="Sign In" />
            </form>
        </div>
    );
};

export default SignIn;