import React from 'react';
import '../_Styles/landing.scss';
import { Button } from '@material-ui/core';
import ghicon from '../_Styles/Imgs/ghicon.svg';
import ghicon2 from '../_Styles/Imgs/ghicon-text.svg';

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
                    <Button style={{ marginTop: '50px', width: '250px', backgroundColor: '#222', color: 'white', fontFamily: 'Julius Sans One', fontSize: '20px' }}>
                        <img style={{ height: '40px', marginRight: '25px' }} src={ghicon} />
                        <img src={ghicon2} style={{ height: '35px' }} />
                    </Button>
                </a>

            </div>
        );
    }
}

export default Landing;
