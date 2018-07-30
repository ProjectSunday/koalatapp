import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
    AppBar, Toolbar, Button, Typography,
} from '@material-ui/core';
import '../_Styles/navbar.scss';

class Navbar extends React.Component {
    render() {
        if (this.props.user.role === 'user') {
            return (
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="title" color="inherit" style={{ flex: 1 }}>
                          Koala-T
                        </Typography>
                        <Button color="inherit"><a href="https://koalauserpool-dev.auth.us-east-2.amazoncognito.com/login?response_type=code&client_id=ncfrp1i43pfh1av4blr7pda8r&redirect_uri=http://localhost:8080/authcallback">Login</a></Button>
                        {/* <ul>
                        <li>
                            <Link to="/UserHome">Home</Link>
                        </li>
                        <li>
                            <Link to="/userprofile"> Profile</Link>
                        </li>
                    </ul> */}
                    </Toolbar>
                </AppBar>
            );
        }

        if (this.props.user.role === 'director') {
            return (
                <div className="navbar">
                    <ul>
                        <li>
                            <Link to="/DirectorView">Home</Link>
                        </li>
                        <li>
                            <Link to="/Dashboard">Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/Venues">Venues</Link>
                        </li>
                    </ul>
                </div>
            );
        }
        if (!this.props.user.role) {
            return (null);
        }
    }
}

const mapStateToProps = state => ({
    user: state.user.profile,
});
export default connect(mapStateToProps)(Navbar);
