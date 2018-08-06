import React from 'react';
import { connect } from 'react-redux';

import { LeaderBoard } from 'Components';
import UpcomingEvents from './upcomingevents';

import '_Styles/home-view.scss';


const HomeView = ({ role }) => {
    if (role === 'director') { return <div> director </div>; }
    return (
        <div className="home-view-container">
            <div className="home-view-content">
                <div className="left"><LeaderBoard /></div>
                <div className="right"><UpcomingEvents /></div>
            </div>

        </div>
    );
};
const mapStateToProps = state => ({
    role: state.user.profile.role,
});

export default connect(mapStateToProps)(HomeView);
