import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Svg from '../_Styles/Imgs/Koala.svg';
import person from '../_Styles/Imgs/personcircle.svg';
import { AppBar, Toolbar, Button, Typography, jssPreset } from '@material-ui/core';
import '../_Styles/navbar.scss';
import TemporaryDrawer from '../Components/rightTempDrawer';
import { GoogleAuthActions, AuthActions } from 'Actions';
import Login from '../Components/signupContainer';



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
        marginTop: '6px',
        height: '50px',
        width: '50px',
        borderRadius: '30px',
        outline: 'none',   
    },
    button: {
        fontFamily: 'Julius Sans One',
        fontSize: '20px',
        letterSpacing: '1px',
    },
    userButton: {
        extend: 'button',
        backgroundColor: 'transparent',
        margin: 'auto',
        padding: '4px',
        borderRadius: '40px',
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

// change to normal component, add below props in after render as a var = this.props, then pull over method toggleLogin, push through temporaryDrawer as a prop then call in tempdrawer to change visibility.
class Navbar extends React.Component {

    state = {
        visible: false,
    }

    toggleLogin = (e) => {
        this.setState({
            visible: !this.state.visible,
        });
    };

    closeLogin = (e) => {
        if(e.target === e.currentTarget) {
            this.setState({
                visible: false
            });
        }
    };

    render() {
        const {role, img, score, authenticated} = this.props;
        
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
                <Button style={styles.userButton}onClick={this.toggleLogin}><img style={styles.img}src={person} alt="signup or login"/></Button>
            );
        }

        let login;
        if(this.state.visible) {
            login = (
                <div onClick={this.closeLogin} 
                style={{position: 'fixed', height: '100%', width: '100%', backgroundColor: 'rgba(0,0,0, 0.3)', zIndex:'1' }}>
                
                    <Login  />

                </div>
            );
        } 

        return (
            <Fragment>
                <AppBar position="static" style={styles.appbar}>
                    <Toolbar style={{ height: '50px', backgroundColor: '#222', color: 'inherit' }}>
                        <img src={Svg} alt="koala" style={{ height: '50px', marginRight: '20px' }} />
                        <Typography variant="title" color="inherit" style={styles.Typo}>
                            Koala-T
                        </Typography>
                        {button}
                        {links}
                    </Toolbar>
                </AppBar>
            {login}
        </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    role: state.user.role,
    img: state.user.imageUrl,
    score: state.user.points,
    authenticated: !!state.user._id,
});

export default connect(mapStateToProps)(Navbar);

