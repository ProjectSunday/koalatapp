import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
    AppBar, Toolbar, Button, Typography,
} from '@material-ui/core';
import '../_Styles/navbar.scss';

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
    if (!role) return <div>Unable to determine role</div>;

    const links = role === 'director' ? <DirectorLinks /> : <UserLinks />;
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="title" color="inherit" style={{ flex: 1 }}>
                          Koala-T
                </Typography>
                <Button color="inherit"><a href="https://koalauserpool-dev.auth.us-east-2.amazoncognito.com/login?response_type=code&client_id=ncfrp1i43pfh1av4blr7pda8r&redirect_uri=http://localhost:8080/authcallback">Login</a></Button>
                {links}
            </Toolbar>
        </AppBar>
    );
};

const mapStateToProps = state => ({
    role: state.user.profile.role,
});
export default connect(mapStateToProps)(Navbar);
