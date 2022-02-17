import TextField from 'shared/textfield';
import './styles.scss';
import { RiShieldUserLine } from 'react-icons/ri'
import logo from 'assets/logo.svg';
import appSs from 'assets/app-light.png';
import { FcGoogle } from 'react-icons/fc'
export default function Auth() {
    return (
        <div className="auth">
            <div className='container'>
                <div className='promo'>
                    <img src={logo} className="logo" alt="name" />
                    <div className='text'>
                        <h2>Designed for Schools and Colleges</h2>
                        <p>The checkbox size can be set by using height and width property. The height</p>
                    </div>
                    <img src={appSs} alt="app"></img>
                </div>
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
                    <p className='bottom_link'>Don't have a student account yet? <a href='hi'>signup</a></p>
                </form>
            </div>
            {/* background-image: linear-gradient(to left bottom, #000000, #0d0d0d, #161616, #1d1d1d, #252525, #282828, #2a2a2a, #2d2d2d, #2b2b2b, #2a2a2a, #282828, #272727); */}
        </div>
    )
}