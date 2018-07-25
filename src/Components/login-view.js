import React from 'react';
import Logo from './logo';
import '_Styles/login-view.scss';

const LoginView = () => (
    <div className="container">
        <Logo />

        <div className="user-info-box">
            <input type="text" placeholder="Player ID" />
            <input type="password" placeholder="Password" />
            <button> Log In </button>
        </div>

    </div>
);


export default LoginView;
