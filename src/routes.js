import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import HomeView from './home-view';
import PlayerView from './Components/login-view';
import LeaderBoard from './Components/leader-board';
import Navbar from './Components/navbar';
import Test from './Components/test';
import './_Styles/routes.scss';


const StyleLink = {
    color: 'white',
    textDecoration: 'none',

}
const KoalaRoutes = () => (
    <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
          <Route exact path="/" component={HomeView} />
          <Route path="/leaderboard" component={LeaderBoard} />
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