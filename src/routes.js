import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
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
          <Switch>
          <Route exact path="/" component={LoginView} />
          <Route path="/leaderboard" component={LeaderBoard} />
          <Route path="/test" component={Test} />
          <Route component={NoMatch} />
          </Switch>

        </div>   
    </BrowserRouter>
)

const NoMatch = ({ location }) => (
    <div>
        <h3>
          No Match for <code>{location.pathname}</code>
        </h3>
    </div>
)

export default KoalaRoutes;