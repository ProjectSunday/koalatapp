import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home, Navbar } from 'Components';
import UserProfile from './Components/user-profile';
import AuthCallback from './Components/AuthCallback';
// import AuthWrapper from './Components/AuthWrapper';
// import DirectorView from './Components/director-view';
import LoginView from './Components/login-view';
import DashBoard from './Components/director-dash';
import LeaderBoard from './Components/leader-board';
import NoMatch from './Components/NoMatch';
import UserSignup from './Components/UserSignup/UserSignup';
import Venues from './Components/venues';

const Routes = ({ authenticated }) => {
    let routes;
    if (authenticated) {
        routes = (
            <Fragment>
                <Navbar />
                <Route exact path="/" component={Home} />
                <Route path="/Dashboard" component={DashBoard} />
                <Route path="/leaderboard" component={LeaderBoard} />
                <Route path="/signup" component={UserSignup} />
                <Route path="/UserProfile" component={UserProfile} />
                <Route path="/Venues" component={Venues} />
            </Fragment>
        );
    } else {
        routes = <Route exact path="/" component={LoginView} />;
    }

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/authcallback" component={AuthCallback} />
                {routes}
                <Route component={NoMatch} />
            </Switch>
        </BrowserRouter>
    );
};

const mapStateToProps = state => ({
    authenticated: !!state.user.userName,
});

export default connect(mapStateToProps)(Routes);
