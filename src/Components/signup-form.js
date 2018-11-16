import React from 'react';
import { withStyles, Button } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import google from '../_Styles/Imgs/google.svg';
import facebook from '../_Styles/Imgs/facebook.svg'
import { GoogleAuthActions, AuthActions } from 'Actions';

const styles = theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    marginTop: '60px',
  },
  input: {
    margin: theme.spacing.unit,
  },
  button: {
    width: '60%',
    height: '40px',
    fontFamily: 'Julius Sans One',
    fontSize: '20px',
    background: '#222',
    margin: 'auto',
    marginTop: '60px',
  },
  img: {
      height: '50px',
      width: '50px',
  },
  socLink: {
    borderRadius: "35px",
  },
  linksBox: {
      display: 'flex',
      justifyContent: 'space-around',
      marginTop: '50px',
  },
});

function Inputs(props) {
  const { classes } = props;
  return (
    <div className={classes.container}>
    <Input
      placeholder="Name"
      className={classes.input}
      inputProps={{
        'aria-label': 'Description',
      }}
    />
      <Input
        placeholder="Email"
        className={classes.input}
        inputProps={{
          'aria-label': 'Description',
        }}
      />
      <Input
        placeholder="Password"
        className={classes.input}
        inputProps={{
          'aria-label': 'Description',
        }}
      />

      <Button className={classes.button}>SignUp!</Button>

       <h1 style={{margin: 'auto', marginTop: '50px',}}>OR</h1> 

       <div className={classes.linksBox}>

            <Button onClick={AuthActions.googleSignIn} className={classes.socLink}>
                <img className={classes.img} src={google} alt="login with google"/>
            </Button>

           <Button className={classes.socLink}><img className={classes.img} src={facebook} alt="login with facebook"/></Button>
       </div>
    </div>
  );
}



export default withStyles(styles)(Inputs);