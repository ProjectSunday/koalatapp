export default {
    AWS_COGNITO_CLIENT_ID: process.env.AWS_COGNITO_CLIENT_ID || 'ncfrp1i43pfh1av4blr7pda8r',
    AWS_COGNITO_APP_WEB_DOMAIN: process.env.AWS_COGNITO_APP_WEB_DOMAIN || 'koalauserpool-dev.auth.us-east-2.amazoncognito.com',
    AWS_COGNITO_REDIRECT_URI_SIGNIN: process.env.AWS_COGNITO_REDIRECT_URI_SIGNIN || 'http://localhost:8080/authcallback',
    AWS_COGNITO_REDIRECT_URI_SIGNOUT: process.env.AWS_COGNITO_REDIRECT_URI_SIGNOUT || 'http://localhost:8080',
    AWS_COGNITO_USER_POOL_ID: process.env.AWS_COGNITO_USER_POOL_ID || 'us-east-2_FQwTKlmKD',
};
