import React from 'react';
import '../_Styles/landing.scss';
import { Button } from '@material-ui/core';

import { PointActions } from 'Actions';
import { LeaderBoard } from 'Components';
// import Logo from './logo';
// import '_Styles/login-view.scss';


class Landing extends React.Component {
    render() {
        return (
            <div className="container">
                <LeaderBoard />

                <a href="https://github.com/ProjectSunday/koalatapp">
                    <Button style={{ marginTop: '50px', width: '200px', backgroundColor: '#222', color: 'white', fontFamily: 'Julius Sans One' }}>
                    View Source Code
                    </Button>
                </a>

            </div>
        );
    }
}


export default Landing;
