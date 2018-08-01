export default {
    AWS_COGNITO_CLIENT_ID: process.env.AWS_COGNITO_CLIENT_ID || '1ljotqs95vgoje0f27p85oefl9',
    AWS_COGNITO_APP_WEB_DOMAIN: process.env.AWS_COGNITO_APP_WEB_DOMAIN || 'koalauserpool-dev.auth.us-east-2.amazoncognito.com',
    AWS_COGNITO_REDIRECT_URI_SIGNIN: process.env.AWS_COGNITO_REDIRECT_URI_SIGNIN || 'http://localhost:8080/authcallback',
    AWS_COGNITO_REDIRECT_URI_SIGNOUT: process.env.AWS_COGNITO_REDIRECT_URI_SIGNOUT || 'http://localhost:8080',
    AWS_COGNITO_SCOPES_ARRAY: ['phone', 'email', 'openid', 'profile'],
    AWS_COGNITO_USER_POOL_ID: process.env.AWS_COGNITO_USER_POOL_ID || 'us-east-2_WfHffUc6M',
    AWS_APPSYNC_GRAPHQL_ENDPOINT: process.env.AWS_APPSYNC_GRAPHQL_ENDPOINT || 'https://5wkdasz5pbgelesh6oczet3he4.appsync-api.us-east-2.amazonaws.com/graphql',
};
