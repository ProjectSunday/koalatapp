import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomeView from './home-view';
import Navbar from './Components/navbar';
import UserProfile from './Components/user-profile';
import AuthCallback from './Components/AuthCallback';
import AuthWrapper from './Components/AuthWrapper';
import DirectorView from './Components/director-view';
import LoginView from './Components/login-view';
import DashBoard from './Components/director-dash';
import LeaderBoard from './Components/leader-board';
import UserSignup from './Components/UserSignup/UserSignup';
import Venues from './Components/venues';

import './_Styles/routes.scss';


const KoalaRoutes = () => (
    <BrowserRouter>
        <div className="routes-box">
            <Navbar />
            <Switch>
                <Route exact path="/" component={AuthWrapper} />
                <Route path="/UserHome" component={HomeView} />
                <Route path="/DirectorView" component={DirectorView} />
                <Route exact path="/login" component={LoginView} />
                <Route path="/Dashboard" component={DashBoard} />
                <Route path="/leaderboard" component={LeaderBoard} />
                <Route path="/signup" component={UserSignup} />
                <Route path="/UserProfile" component={UserProfile} />
                <Route path="/Venues" component={Venues} />
                <Route path="/authcallback" component={AuthCallback} />
                <Route component={NoMatch} />
            </Switch>
        </div>
    </BrowserRouter>
);

const NoMatch = ({ location }) => (
    <div>
        <h3>
          No Match for <code>{location.pathname}</code>
        </h3>
    </div>
);

export default KoalaRoutes;
