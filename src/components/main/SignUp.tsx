import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from '../../actions/signActions/signUp';
import { AppState } from '../../store';
import { Redirect } from 'react-router-dom';

const SignUp = () => {

    const [username, setUsername] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const dispatch = useDispatch()
    const { message } = useSelector((state: AppState) => state.signReducer)

    const { token } = useSelector((state: AppState) => state.signReducer)
    if (token) return <Redirect to='/' />

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        dispatch(signUp(username, email, password))
    }

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>): void => setUsername(e.target.value)
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => setEmail(e.target.value)
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>): void => setPassword(e.target.value)

    return (
        <div className="signUp">
            <form onSubmit={handleSubmit}>
                <div className="input-field">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" value={username} onChange={handleUsernameChange} />
                </div>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" value={email} onChange={handleEmailChange} />
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={password} onChange={handlePasswordChange} />
                </div>
                <input type="submit" value="Sign Up" />
            </form>
            <div className="message">{message}</div>
        </div>
    );
};

export default SignUp;