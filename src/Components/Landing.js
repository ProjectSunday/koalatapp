import React from 'react';
import '../_Styles/landing.scss';

import { PointActions } from 'Actions';
import { LeaderBoard } from 'Components';
// import Logo from './logo';
// import '_Styles/login-view.scss';

class Landing extends React.Component {
    render() {
        return (
            <div className="container">
                <LeaderBoard />
            </div>
        );
    }
}


export default Landing;
