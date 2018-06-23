import 'babel-polyfill';

import React from "react";
import ReactDOM from "react-dom";
import KoalaRoutes from './routes';
import "./_Styles/Index.scss";
import HomeView from './home-view'
import UserSignup from './Components/UserSignup/UserSignup';

//import KoalaTApi from './Actions/koalat-api';

//const api = new KoalaTApi();

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
            //   <KoalaRoutes />
              <UserSignup />
        )
    }
}

ReactDOM.render(<App />, 
    document.getElementById("app") );