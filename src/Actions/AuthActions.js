import { CognitoAuth } from 'amazon-cognito-auth-js';

import config from 'config';
import Store from 'Store';
import { KoalaApi } from 'Actions';

export const authenticate = href => new Promise((resolve, reject) => {
    const authData = {
        ClientId: config.AWS_COGNITO_CLIENT_ID,
        AppWebDomain: config.AWS_COGNITO_APP_WEB_DOMAIN,
        TokenScopesArray: config.AWS_COGNITO_SCOPES_ARRAY,
        RedirectUriSignIn: config.AWS_COGNITO_REDIRECT_URI_SIGNIN,
        RedirectUriSignOut: config.AWS_COGNITO_REDIRECT_URI_SIGNOUT,
        UserPoolId: config.AWS_COGNITO_USER_POOL_ID,
    };
    const auth = new CognitoAuth(authData);

    auth.userhandler = {
        async onSuccess(result) {
            extractJwtToken(result);
            await getProfile(result);
            await getScore();
            resolve();
        },
        onFailure(err) {
            console.error('CognitoAuth err:', err);
            reject(err);
        },
    };
    auth.parseCognitoWebResponse(href);
});

const extractJwtToken = (result) => {
    const jwtToken = result.getAccessToken().getJwtToken();
    Store.dispatch({
        type: 'USER_SET',
        user: { jwtToken },
    });
};

const getProfile = async (result) => {
    const {
        given_name: fn,
        family_name: ln,
        email: e,
    } = result.idToken.payload;
    await KoalaApi.send(`mutation { profile ( firstName: "${fn}" lastName: "${ln}" email: "${e}" ){ userName firstName lastName email role } }`).then((data) => {
        const { firstName, lastName, email, role, userName } = data.profile;
        Store.dispatch({
            type: 'USER_SET',
            user: { profile: { firstName, lastName, email, role }, userName },
        });
    });
};
const getScore = async () => {
    const data = await KoalaApi.send('query { getScore { score } }');
    const { score } = data.getScore;
    Store.dispatch({
        type: 'USER_SET',
        user: { score },
    });
};
