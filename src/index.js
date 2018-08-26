import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createMuiTheme, MuiThemeProvider, CssBaseline } from '@material-ui/core';



// import Amplify from 'aws-amplify';
// import { withAuthenticator } from 'aws-amplify-react';

// import awsExports from 'src/aws-exports';

import Routes from './Routes';
import './_Styles/Index.scss';


import store from './Store';


// Amplify.configure(awsExports);


const theme = createMuiTheme({
    palette: {
        type: 'dark',
    },
});

const App = () => (
    <MuiThemeProvider theme={theme}>
    <CssBaseline/>
        <Provider store={store}>
            <Routes />
        </Provider>
    </MuiThemeProvider>
);

// const federated = {
//     google_client_id: '191304805062-d0rck99u7ej5j0329q0e9gvsa5tj4a4t.apps.googleusercontent.com',
//     // facebook_app_id: '',
//     // amazon_client_id: ''
// };

// ReactDOM.render(<AppWithAuth federated={federated} />,

ReactDOM.render(<App />, document.getElementById('app'));
