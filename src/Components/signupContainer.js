import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import LoginForm from '../Components/loginForm';
import SignUpForm from '../Components/SignUpForm';


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
    width: 500,
    height: 600,
    position: 'relative',
    marginTop: '40px',
    margin: 'auto',
  },
});

class signupContainer extends React.Component {
  state = {
    value: 0,
    loginVisible: true,
  };

  toggleView = () => {
    this.setState({
      loginVisible: !this.state.loginVisible,
  });
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;

    let content;
    if(!this.state.loginVisible){
    content = ( <SignUpForm /> );
    } else {
    content = ( <LoginForm /> );
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
            <Tab onClick={this.toggleView} label="Login" />
            <Tab onClick={this.toggleView} label="Sign Up" />
          </Tabs>
        </AppBar>
      
          <TabContainer dir={theme.direction}>{content}</TabContainer>

      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(signupContainer);