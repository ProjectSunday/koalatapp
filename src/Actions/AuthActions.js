import { CognitoAuth } from 'amazon-cognito-auth-js';

import config from 'config';
import Store from 'Store';
import { KoalaApi } from 'Actions';
import James from '../_Styles/Imgs/james.jpg';

export const authenticate2 = async (code) => {
    const data = await KoalaApi.send2(`mutation { authenticate (code: "${code}") { _id email givenName familyName imageUrl jwtToken role points } }`);
    const user = data.authenticate;
    Store.dispatch({
        type: 'USER_SET',
        user,
    });
};

export const googleSignIn = async () => {
    const data = await KoalaApi.send2('query { getGoogleAuthUrl }');
    window.location = data.getGoogleAuthUrl;
};
