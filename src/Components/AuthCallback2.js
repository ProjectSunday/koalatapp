import React from 'react';
import { Redirect } from 'react-router-dom';

import { AuthActions } from 'Actions';

export default class AuthCallback extends React.Component {
    constructor() {
        super();
        this.state = { authenticated: false };
        const code = decodeURIComponent(window.location.search.substring(6));
        // console.log('code', code);
        AuthActions.authenticate2(code).then(() => {
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
