import { CognitoAuth } from 'amazon-cognito-auth-js';

import config from 'config';
import Store from 'Store';
import { KoalaApi } from 'Actions';

export const getAWSProfile = href => new Promise((resolve) => {
    const authData = {
        ClientId: config.AWS_COGNITO_CLIENT_ID,
        AppWebDomain: config.AWS_COGNITO_APP_WEB_DOMAIN,
        TokenScopesArray: config.AWS_COGNITO_SCOPES_ARRAY,
        RedirectUriSignIn: config.AWS_COGNITO_REDIRECT_URI_SIGNIN,
        RedirectUriSignOut: config.AWS_COGNITO_REDIRECT_URI_SIGNOUT,
        UserPoolId: config.AWS_COGNITO_USER_POOL_ID, // Your user pool id here
        // IdentityProvider: 'google', // e.g. 'Facebook',
        // AdvancedSecurityDataCollectionFlag: '<TODO: boolean value indicating whether you want to enable advanced security data collection>', // e.g. true
        // Storage: '<TODO the storage object>', // OPTIONAL e.g. new CookieStorage(), to use the specified storage provided
    };
    const auth = new CognitoAuth(authData);

    auth.userhandler = {
        onSuccess(result) {
            const jwtToken = result.getAccessToken().getJwtToken();

            Store.dispatch({
                type: 'USER_SET',
                user: { jwtToken },
            });


            KoalaApi.send('query { profile { email sub } }').then((data) => {
                console.log('data', data);
                // Store.dispatch({
                //     type: 'USER_SET',
                //     user: { profile },
                // });
                resolve();
            });
        },
        onFailure(err) {
            console.error('CognitoAuth err:', err);
        },
    };


    auth.parseCognitoWebResponse(href);
});
