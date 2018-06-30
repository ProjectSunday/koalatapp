import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Amplify from 'aws-amplify';
// import { withAuthenticator } from 'aws-amplify-react';

import awsExports from 'src/aws-exports';

import KoalaRoutes from './routes';
import './_Styles/Index.scss';


import store from './Store';


Amplify.configure(awsExports);


const App = () => (
    <Provider store={store}>
        <KoalaRoutes />
    </Provider>
);

// const federated = {
//     google_client_id: '191304805062-d0rck99u7ej5j0329q0e9gvsa5tj4a4t.apps.googleusercontent.com',
//     // facebook_app_id: '',
//     // amazon_client_id: ''
// };

// ReactDOM.render(<AppWithAuth federated={federated} />,

ReactDOM.render(<App />, document.getElementById('app'));
