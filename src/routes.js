import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import HomeView from './home-view';
import PlayerView from './Components/login-view';
import LeaderBoard from './Components/leader-board';
import Navbar from './Components/navbar';
import UserProfile from './Components/user-profile';
import Test from './Components/test';

import UserSignup from 'Components/UserSignup/UserSignup';

import './_Styles/routes.scss';

const StyleLink = {
    color: 'white',
    textDecoration: 'none',

}
const KoalaRoutes = () => (
    <BrowserRouter>
        <div className="routes-box">
          <Navbar />
          <Switch>
          <Route exact path="/" component={HomeView} />
          <Route path="/userprofile" component={UserProfile} />
          {/* <Route exact path="/" component={LoginView} /> */}
          <Route path="/leaderboard" component={LeaderBoard} />
          <Route path="/signup" component={UserSignup} />
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