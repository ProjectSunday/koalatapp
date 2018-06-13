import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import LoginView from './Components/login-view';
import LeaderBoard from './Components/leader-board';
import Test from './Components/test';

const KoalaRoutes = () => (
    <BrowserRouter>
        <div>
          <ul>
            <li>
                <Link to="/">Login</Link>
            </li>
            <li>
                <Link to="/leaderboard">LeaderBoard</Link>
            </li>
            <li>
                <Link to="/test">Test </Link>
            </li>
          </ul>

          <Route exact path="/" component={LoginView} />
          <Route path="/leaderboard" component={LeaderBoard} />
          <Route path="/test" component={Test} />

        </div>   
    </BrowserRouter>
)

export default KoalaRoutes;