import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Svg from '../_Styles/Imgs/Koala.svg';
import config from 'config';
import { AppBar, Toolbar, Button, Typography } from '@material-ui/core';
import '../_Styles/navbar.scss';

import { GoogleAuthActions, AuthActions } from 'Actions';

const signInHref = `https://${config.AWS_COGNITO_APP_WEB_DOMAIN}/login?response_type=code&client_id=${config.AWS_COGNITO_CLIENT_ID}&redirect_uri=${config.AWS_COGNITO_REDIRECT_URI_SIGNIN}`;

const styles = {
    font: {
        fontFamily: 'Julius Sans One',
        fontSize: '20px',
        padding: '0 30px' },
    img: {
        height: '60px',
        width: '60px',
        borderRadius: '30px',
    },
    button: {
        fontFamily: 'Julius Sans One',
        fontSize: '20px',
        letterSpacing: '1px',
    },
    ul: {
        display: 'flex',
        alignItems: 'center',
    },
    li: {
        display: 'flex',
    },
    p: {
        marginLeft: '10px',
        fontSize: '20px',
        fontFamily: 'Julius Sans One',
    },
    Typo: {
        flex: 1,
        fontFamily: 'Julius Sans One',
        fontSize: '30px',
        letterSpacing: '1px',
    },
};

const UserLinks = props => (
    <ul style={styles.ul}>
        <li>
            <Link to="/" style={styles.font}>
                <Button color="inherit" style={styles.button}>Home</Button>
            </Link>
        </li>
        <li>
            <Link to="/userprofile" style={styles.font}>
                <Button color="inherit" style={styles.button}>Profile</Button>
            </Link>
        </li>
        <li style={styles.li}>
            <img src={props.img} alt="j" style={styles.img} />
            <p style={styles.p}>Points: {props.score}</p>
        </li>
    </ul>
);

const DirectorLinks = () => (
    <ul>
        <li>
            <Link to="/">
                <Button color="inherit" style={styles.button}>Home</Button>
            </Link>
        </li>
        <li>
            <Link to="/Dashboard">
                <Button color="inherit" style={styles.button}>Dashboard</Button>
            </Link>
        </li>
        <li>
            <Link to="/Venues">
                <Button color="inherit" style={styles.button}>Venues</Button>
            </Link>
        </li>
    </ul>
);

const Navbar = ({ role, img, score, authenticated }) => {
    let links;
    if (!role) {
        links = null;
    } else if (role === 'director') {
        links = <DirectorLinks />;
    } else {
        links = <UserLinks img={img} score={score} />;
    }

    let button;
    if (authenticated) {
        button = null;
    } else {
        button = (
            <a href={signInHref}>
                <Button color="inherit" style={styles.button}>Login</Button>
            </a>
        );
    }

    return (
        <AppBar position="static">
            <Toolbar>
                <img src={Svg} alt="koala" style={{ height: '50px', marginRight: '20px' }} />
                <Typography variant="title" color="inherit" style={styles.Typo}>
                    Koala-T
                </Typography>
                <Button onClick={AuthActions.googleSignIn}>Google SignIn</Button>
                {button}
                {links}
            </Toolbar>
        </AppBar>
    );
};

const mapStateToProps = state => ({
    role: state.user.role,
    img: state.user.imageUrl,
    score: state.user.points,
    authenticated: !!state.user._id,
});
export default connect(mapStateToProps)(Navbar);
