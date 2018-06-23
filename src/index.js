import 'babel-polyfill';

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';

import Amplify, { Auth } from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react';

import aws_exports from 'src/aws-exports';

import KoalaRoutes from './routes';
import "./_Styles/Index.scss";
import HomeView from './home-view'
import UserSignup from './Components/UserSignup/UserSignup';


import store from './Store';


Amplify.configure(aws_exports);


//import KoalaTApi from './Actions/koalat-api';

//const api = new KoalaTApi();np

// api.sendGraph({
//     query: `query { listUsers { items { id email }}}`
// }).then(d => {
//     console.log('data', d)
// })

// // console.log('data', data);

//api.sendQuery(`{listUsers{items{id email }}}`)


class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <KoalaRoutes />
            </Provider>
        )
    }
}

// const AppWithAuth = withAuthenticator(App);

const federated = {
    google_client_id: '191304805062-d0rck99u7ej5j0329q0e9gvsa5tj4a4t.apps.googleusercontent.com',
    // facebook_app_id: '',
    // amazon_client_id: ''
}

// ReactDOM.render(<AppWithAuth federated={federated} />, 
ReactDOM.render(<App />,
    document.getElementById("app") );