import React from 'react';

// import Logo from './logo';
import '_Styles/login-view.scss';


const signInHref = `obsolete`;

const Landing = () => (
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


export default Landing;
