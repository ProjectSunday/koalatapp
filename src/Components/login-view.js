import React from 'react';
import Logo from './logo';
import '_Styles/login-view.scss';

class LoginView extends React.Component {
    render() {
        return (
            <div>
                <div className="container">
                    <Logo />

                    <div className="user-info-box">
                        <input type="text" placeholder="Player ID" />
                        <input type="password" placeholder="Password" />
                        <button> Log In </button>
                    </div>

                </div>

            </div>
        );
    }
}

export default LoginView;
