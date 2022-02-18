import { Route, Switch, useRouteMatch } from 'react-router-dom';
import './styles.scss';
import logo from 'assets/logo.svg';
import appSs from 'assets/app-light.png';
import SignIn from './signin';
import SignUp from './signup';
export default function Auth() {
    let { path } = useRouteMatch();

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
                <Switch>
                    <Route path="/auth/signup" children={<SignUp />} />
                    <Route path="/auth/login" children={<SignIn />} />
                </Switch>
            </div>
            {/* background-image: linear-gradient(to left bottom, #000000, #0d0d0d, #161616, #1d1d1d, #252525, #282828, #2a2a2a, #2d2d2d, #2b2b2b, #2a2a2a, #282828, #272727); */}
        </div>
    )
}