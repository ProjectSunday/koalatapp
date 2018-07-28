import React from 'react';
import { Redirect } from 'react-router-dom';
import { CognitoAuth } from 'amazon-cognito-auth-js';

import config from 'config';
import KoalaApi from '../Actions/koalat-api';

import { ProfileActions } from 'Actions';
// import wtf from 'Actions';

console.log('authcallback', ProfileActions);

export default class AuthCallback extends React.Component {
    constructor() {
        super();
        const authData = {
            ClientId: config.AWS_COGNITO_CLIENT_ID,
            AppWebDomain: config.AWS_COGNITO_APP_WEB_DOMAIN,
            TokenScopesArray: ['email', 'profile', 'openid'], // e.g.['phone', 'email', 'profile','openid', 'aws.cognito.signin.user.admin'],
            RedirectUriSignIn: config.AWS_COGNITO_REDIRECT_URI_SIGNIN,
            RedirectUriSignOut: config.AWS_COGNITO_REDIRECT_URI_SIGNOUT,
            // IdentityProvider: 'google', // e.g. 'Facebook',
            UserPoolId: config.AWS_COGNITO_USER_POOL_ID, // Your user pool id here
            // AdvancedSecurityDataCollectionFlag: '<TODO: boolean value indicating whether you want to enable advanced security data collection>', // e.g. true
            // Storage: '<TODO the storage object>', // OPTIONAL e.g. new CookieStorage(), to use the specified storage provided
        };
        const auth = new CognitoAuth(authData);

        this.state = {
            authenticated: false,
        };

        const self = this;

        auth.userhandler = {
            onSuccess(result) {
                console.log('result', result);
                const token = result.getAccessToken().getJwtToken();
                // KoalaApi.query('{query { profile { email, memberId } }}', token).then((a) => {
                //     console.log('a', a);
                // });

                const fakeProfile = {
                    email: 'blah@gmail.com',
                    name: 'name blah',
                    role: 'director',
                };
                ProfileActions.setProfile(fakeProfile);

                self.setState({
                    authenticated: true,
                });
            },
            onFailure(err) {
                console.log('CognitoAuth err:', err);
            },
        };


        auth.parseCognitoWebResponse(window.location.href);

        // console.log('auth', auth);

        // const session = auth.getSession();

        // console.log('session', session);
    }

    render() {
        if (this.state.authenticated) return <Redirect to="/" />;
        return <div>Processing...</div>;
    }
}
