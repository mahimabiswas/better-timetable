import { Link } from 'react-router-dom';
import TextField from 'shared/textfield';
import { RiShieldUserLine } from 'react-icons/ri';
import { FcGoogle } from 'react-icons/fc';
export default function SignIn() {
    return (
        <form>
            <div className='top'>
                <i><RiShieldUserLine /></i>
                <h2>Hello Again!</h2>
                <p>Login with your email and password to get authorized</p>
            </div>
            <TextField type='email' placeholder="itsme@some.org" title="email" name="login-email" />
            <TextField styles={{ marginTop: '18px' }} type='password' placeholder="password" title="password" name="login-password" />
            <div className='form-options'>
                <div>
                    <input id="remember-me" type='checkbox' />
                    <label htmlFor="remember-me">Remember me</label>
                </div>
                <span>Recover password</span>
            </div>
            <button className='auth_button'>Login</button>
            <p className='or'>or</p>
            <button className='auth_button auth_google_button'><FcGoogle /><span>Authorize with Google</span></button>
            <p className='bottom_link'>Don't have a student account yet? <Link to="/auth/signup">signup</Link></p>
        </form>
    )
}