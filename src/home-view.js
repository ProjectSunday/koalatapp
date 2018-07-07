import React from 'react';
import './_Styles/home-view.scss';
import LeaderBoard from './Components/leader-board';
import CurrentScore from './Components/user-current-score';
import UpcomingEvents from './Components/upcomingevents';

class HomeView extends React.Component {
    render() {
        return (
            <div className="home-view-container">

                <div className="home-view-content">
                    <div className="left"><CurrentScore /></div>
                    <div className="center"><LeaderBoard /></div>
                    <div className="right"><UpcomingEvents /></div>
                </div>

            </div>
        );
    }
}

export default HomeView;
