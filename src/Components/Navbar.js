import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Svg from '../_Styles/Imgs/Koala.svg';
import config from 'config';
import { AppBar, Toolbar, Button, Typography, jssPreset } from '@material-ui/core';
import '../_Styles/navbar.scss';

import { GoogleAuthActions, AuthActions } from 'Actions';

const signInHref = `https://${config.AWS_COGNITO_APP_WEB_DOMAIN}/login?response_type=code&client_id=${config.AWS_COGNITO_CLIENT_ID}&redirect_uri=${config.AWS_COGNITO_REDIRECT_URI_SIGNIN}`;

//  Getting rather large need to import this from another file, check with hai on best practices for importing jss

const styles = {
    appbar: {
        marginBottom: '100',
    },
    font: {
        fontFamily: 'Julius Sans One',
        fontSize: '20px',
        padding: '0 30px' },
    img: {
        height: '50px',
        width: '50px',
        borderRadius: '30px',
        marginTop: '6px',
        marginRight: '20px',
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
        margin: 'auto',
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
        <li style={styles.li}>
            <Link to="/userprofile">
                <img src={props.img} alt="j" style={styles.img} />
            </Link>
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
            <Button style={styles.button} color="inherit" onClick={AuthActions.googleSignIn}>Google Sign In</Button>
        );
    }

    return (
        <AppBar position="static" style={styles.appbar}>
            <Toolbar style={{ height: '50px', backgroundColor: '#222', color: 'white' }}>
                <img src={Svg} alt="koala" style={{ height: '50px', marginRight: '20px' }} />
                <Typography variant="title" color="inherit" style={styles.Typo}>
                    Koala-T
                </Typography>
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
