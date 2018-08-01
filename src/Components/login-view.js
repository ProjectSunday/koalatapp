import React from 'react';

import config from 'config';
// import Logo from './logo';
import '_Styles/login-view.scss';


const signInHref = `https://${config.AWS_COGNITO_APP_WEB_DOMAIN}/login?response_type=code&client_id=${config.AWS_COGNITO_CLIENT_ID}&redirect_uri=${config.AWS_COGNITO_REDIRECT_URI_SIGNIN}`;

const LoginView = () => (
    <div className="container">
        {/* <Logo /> */}
        <a href={signInHref}>Sign in/signup</a>
        <div className="user-info-box">
            <input type="text" placeholder="Player ID" />
            <input type="password" placeholder="Password" />
            <button> Log In </button>
        </div>

    </div>
);


export default LoginView;
