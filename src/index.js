import 'babel-polyfill';

import React from "react";
import ReactDOM from "react-dom";
import "./_Styles/Index.scss";
import Logo from './Components/logo';
import PlayerView from "./Components/player-view";
import Test from './Components/test';

import KoalaTApi from './Actions/koalat-api';

const api = new KoalaTApi();

// api.sendGraph({
//     query: `query { listUsers { items { id email }}}`
// }).then(d => {
//     console.log('data', d)
// })

// // console.log('data', data);

api.sendQuery(`{listUsers{items{id email alsdjfds sdlf sljfdsj fsldf sdljf sdflsd fjlsdjfsdlf sdlfj sdlfj }}}`)

class App extends React.Component {
    render() {
        return (
            <div>
              <PlayerView />
              <Logo />
              <Test />
            </div>
        )
    }
}

ReactDOM.render(<App />, 
    document.getElementById("app") );