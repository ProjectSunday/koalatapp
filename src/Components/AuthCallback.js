import React from 'react';
import { Redirect } from 'react-router-dom';
// import { CognitoAuth } from 'amazon-cognito-auth-js';

// import config from 'config';
// import KoalaApi from '../Actions/koalat-api';

import { AuthActions } from 'Actions';

export default class AuthCallback extends React.Component {
    constructor() {
        super();
        this.state = { authenticated: false };
        const h = window.location.href;
        AuthActions.getProfile(h).then(() => {
            this.setState({
                authenticated: true,
            });
        });
    }

    render() {
        if (this.state.authenticated) return <Redirect to="/" />;
        return <div>Processing...</div>;
    }
}
