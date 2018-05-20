import React from "react";
import ReactDOM from "react-dom";
import "./_Styles/Index.scss";


class App extends React.Component {
    render() {
        return (
            <div>
                <div className="Container">
                  <h1>Koala-T-Poker League</h1>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, 
    document.getElementById("app") );