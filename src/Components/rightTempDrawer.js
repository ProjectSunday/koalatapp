import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import { withStyles, Drawer, Button, List, Divider } from '@material-ui/core/';
import { GoogleAuthActions, AuthActions } from 'Actions';
import person from '../_Styles/Imgs/personoutline.svg';
import SignUp from '../Components/signupForm';


const styles = {
    button: {
        fontFamily: 'Julius Sans One',
        fontSize: '20px',
        letterSpacing: '1px',
        color: 'white',
        margin: 'auto',
    },
    img: {
        height: '50px',
        width: '50px',
    }
}

class TemporaryDrawer extends React.Component {
    state = {
      right: false,
      visible: false,
    };
  
    toggleDrawer = (side, open) => () => {
      this.setState({
        [side]: open,
      });
    };


render() {

    const sideList = (
        <div style={{width: '300px'}}>
          <List>
              <Button onClick={this.props.toggleLogin} style={styles.button}>SIGNUP</Button>
              <Button style={styles.button} color="inherit" onClick={AuthActions.googleSignIn}>LOGIN</Button>
          </List>
          <Divider />
        </div>
      );





return (
    <Fragment>
        <Button onClick={this.toggleDrawer('right', true)}>
            <img src={person}  style={styles.img} alt="login or signup"/>
        </Button> 
        <Drawer anchor="right" open={this.state.right} onClose={this.toggleDrawer('right', false)}>
                <div
                    tabIndex={0}
                    role="button"
                    onClick={this.toggleDrawer('right', false)}
                    onKeyDown={this.toggleDrawer('right', false)}
                >
                {sideList}
                </div>
        </Drawer>
        </Fragment>
        );
    }
}

export default withStyles(styles)(TemporaryDrawer);