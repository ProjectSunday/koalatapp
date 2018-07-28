import React, { Fragment } from 'react';
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
import NoMatch from './Components/NoMatch';
import UserSignup from './Components/UserSignup/UserSignup';
import Venues from './Components/venues';

import './_Styles/routes.scss';


const KoalaRoutes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/authcallback" component={AuthCallback} />
            {Routes}
        </Switch>
    </BrowserRouter>
);

const Routes = (
    <Fragment>
        <Navbar />
        <Route exact path="/" component={AuthWrapper} />
        <Route path="/UserHome" component={HomeView} />
        <Route path="/DirectorView" component={DirectorView} />
        <Route exact path="/login" component={LoginView} />
        <Route path="/Dashboard" component={DashBoard} />
        <Route path="/leaderboard" component={LeaderBoard} />
        <Route path="/signup" component={UserSignup} />
        <Route path="/UserProfile" component={UserProfile} />
        <Route path="/Venues" component={Venues} />
        <Route component={NoMatch} />
    </Fragment>
);


export default KoalaRoutes;
