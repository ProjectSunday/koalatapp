import React from 'react';
import { Redirect } from 'react-router-dom';

import config from 'config';

import { AuthActions } from 'Actions';


export default class AuthCallback extends React.Component {
    constructor() {
        super();
        this.state = { authenticated: false };
        const h = window.location.href;
        AuthActions.authenticate(h).then(() => {
            this.setState({
                authenticated: true,
            });
        });
    }

    render() {
        if (this.state.authenticated) return <Redirect to="/" />;
        return <div>Authenticating...</div>;
    }
}
