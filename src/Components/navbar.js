import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import config from 'config';

import {
    AppBar, Toolbar, Button, Typography,
} from '@material-ui/core';
import '../_Styles/navbar.scss';

const signInHref = `https://${config.AWS_COGNITO_APP_WEB_DOMAIN}/login?response_type=code&client_id=${config.AWS_COGNITO_CLIENT_ID}&redirect_uri=${config.AWS_COGNITO_REDIRECT_URI_SIGNIN}`;

const UserLinks = () => (
    <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/userprofile">Profile</Link></li>
    </ul>
);

const DirectorLinks = () => (
    <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Dashboard">Dashboard</Link></li>
        <li><Link to="/Venues">Venues</Link></li>
    </ul>
);
const Navbar = ({ role }) => {
    let links;
    if (!role) {
        links = null;
    } else if (role === 'director') {
        links = <DirectorLinks />;
    } else {
        links = <UserLinks />;
    }
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="title" color="inherit" style={{ flex: 1 }}>
                          Koala-T
                </Typography>
                <a href={signInHref}>
                    <Button color="inherit">Login</Button>
                </a>

                {links}
            </Toolbar>
        </AppBar>
    );
};

const mapStateToProps = state => ({
    role: state.user.profile.role,
});
export default connect(mapStateToProps)(Navbar);
