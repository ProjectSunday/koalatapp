import 'babel-polyfill';

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';

import KoalaRoutes from './routes';
import "./_Styles/Index.scss";
import HomeView from './home-view'
import UserSignup from './Components/UserSignup/UserSignup';


import store from './Store';

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

ReactDOM.render(<App />, 
    document.getElementById("app") );