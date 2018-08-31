import React from 'react';
import PropTypes from 'prop-types';
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

      <Button className={classes.button}>Login!</Button>

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

Inputs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Inputs);


















// import React from 'react';
// import { withStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import Typography from '@material-ui/core/Typography';
// import LoginForm from '../Components/loginForm';
// import SignUpForm from '../Components/SignUpForm';


// function TabContainer({ children, dir }) {
//   return (
//     <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
//       {children}
//     </Typography>
//   );
// }



// const styles = theme => ({
//   root: {
//     backgroundColor: theme.palette.background.paper,
//     width: 500,
//     height: 600,
//     position: 'relative',
//     marginTop: '40px',
//     margin: 'auto',
//   },
// });

// class signupContainer extends React.Component {
  
//   state = {
//     value: 0,
//     loginVisible: true,
//   };

//   toggleView = () => {
//     this.setState({
//       loginVisible: !this.state.loginVisible,
//   });
//   }

//   handleChange = (event, value) => {
//     this.setState({ value });
//   };

//   handleChangeIndex = index => {
//     this.setState({ value: index });
//   };

//   render() {
//     const { classes, theme } = this.props;
    
//     let content;
//     if(!this.state.loginVisible){
//       return <SignUpForm />
//     } else {
//       return <LoginForm />
//     }

//     return (
//       <div className={classes.root}>
//         <AppBar position="static" color="default">
//           <Tabs
//             value={this.state.value}
//             onChange={this.handleChange}
//             indicatorColor="primary"
//             textColor="primary"
//             fullWidth
//           >
//             <Tab label="Login" />
//             <Tab onClick={this.toggleView} label="Sign Up" />
//           </Tabs>
//         </AppBar>
      
//           <TabContainer dir={theme.direction}>{content}</TabContainer>

//       </div>
//     );
//   }
// }

// export default withStyles(styles, { withTheme: true })(signupContainer);