import React from "react";
import ReactDOM from "react-dom";
import "./_Styles/Index.scss";
import Logo from './Components/logo';
import PlayerView from "./Components/player-view";


class App extends React.Component {
    render() {
        return (
            <div>
              <PlayerView />
            </div>
        )
    }
}

ReactDOM.render(<App />, 
    document.getElementById("app") );