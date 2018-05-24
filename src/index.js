import React from "react";
import ReactDOM from "react-dom";
import "./_Styles/Index.scss";
import Logo from './Components/logo';


class App extends React.Component {
    render() {
        return (
            <div>
              <Logo />
            </div>
        )
    }
}

ReactDOM.render(<App />, 
    document.getElementById("app") );