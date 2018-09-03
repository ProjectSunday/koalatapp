import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import LoginForm from './loginForm';
import SignUpForm from './SignUpForm';


function TabContainer({ children, dir }) {
    return (
        <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
            {children}
        </Typography>
    );
}


const styles = theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: '50%',
        position: 'relative',
        marginTop: '40px',
        margin: 'auto',
    },
    '@media (max-width: 500px)': {
        root: {
            width: '90%',
        },
    },
});

class signupContainer extends React.Component {
  state = {
      value: 0,
      loginVisible: true,
  };

  signUp = (e) => {
      this.setState({
          loginVisible: false,
      });
  }

  logIn = (e) => {
      this.setState({
          loginVisible: true,
      });
  }

  handleChange = (event, value) => {
      this.setState({ value });
  };

  handleChangeIndex = (index) => {
      this.setState({ value: index });
  };

  render() {
      const { classes, theme } = this.props;

      let content;
      if (!this.state.loginVisible) {
          content = (<SignUpForm />);
      } else {
          content = (<LoginForm />);
      }

      return (
          <div className={classes.root}>
              <AppBar position="static" color="default">
                  <Tabs
                      value={this.state.value}
                      onChange={this.handleChange}
                      indicatorColor="primary"
                      textColor="primary"
                      fullWidth
                  >
                      <Tab onClick={this.logIn} label="Login" />
                      <Tab onClick={this.signUp} label="Sign Up" />
                  </Tabs>
              </AppBar>

              <TabContainer dir={theme.direction}>{content}</TabContainer>

          </div>
      );
  }
}

export default withStyles(styles, { withTheme: true })(signupContainer);
