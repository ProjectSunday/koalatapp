import React from 'react';
import Logo from './logo';
import LeaderBoard from './leader-board';
import '_Styles/login-view.scss';

class PlayerView extends React.Component {
    render() {
        return (
        <div>
          <div className="container">
          <Logo />
          
          <div className="user-info-box">
          <input type="text" placeholder="Player ID"></input>
          <input type="password" placeholder="Password"></input>
          <button> Log In </button>
          </div>

          </div>

        </div>
        ) 
    }
}

export default PlayerView;