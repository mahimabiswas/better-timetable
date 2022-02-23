import { Link, useHistory } from 'react-router-dom';
import TextField from 'shared/textfield';
import { RiShieldUserLine } from 'react-icons/ri';
import { FcGoogle } from 'react-icons/fc';
import { useState } from 'react';
import axios from 'axios';
import { useToken } from 'util/auth/useToken';

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [, setToken] = useToken();

    const history = useHistory();

    const handleSignIn = async (e) => {
        e.preventDefault();
        console.log(email, password)

        const response = await axios.post('https://better-timetable-server.herokuapp.com/api/login', {
            // const response = await axios.post('http://localhost:8080/api/login', {
            email,
            password
        });

        const { token } = response.data;
        setToken(token);
        history.push('/');
    }
    return (
        <form>
            <div className='top'>
                <i><RiShieldUserLine /></i>
                <h2>Hello Again!</h2>
                <p>Login with your email and password to get authorized</p>
            </div>
            <TextField value={email} onChange={e => setEmail(e.target.value)} type='email' placeholder="itsme@some.org" title="email" name="login-email" />
            <TextField value={password} onChange={e => setPassword(e.target.value)} styles={{ marginTop: '18px' }} type='password' placeholder="password" title="password" name="login-password" />
            <div className='form-options'>
                <div>
                    <input id="remember-me" type='checkbox' />
                    <label htmlFor="remember-me">Remember me</label>
                </div>
                <Link to="/">
                    <span>Recover password</span>
                </Link>
            </div>
            <button className='auth_button' disabled={!email || !password} onClick={handleSignIn}>Login</button>
            <p className='or'>or</p>
            <button className='auth_button auth_google_button'><FcGoogle /><span>Authorize with Google</span></button>
            <p className='bottom_link'>Don't have a student account yet? <Link to="/auth/signup">signup</Link></p>
        </form>
    )
}