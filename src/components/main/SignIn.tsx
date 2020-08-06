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
                <div className="input-field">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" value={username} onChange={handleUsernameChange} />
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={password} onChange={handlePasswordChange} />
                </div>
                <button className="btn waves-effect blue darken-4" type="submit" name="action">Sign in</button>
            </form>
        </div>
    );
};

export default SignIn;