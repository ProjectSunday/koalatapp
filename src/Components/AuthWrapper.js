import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import HomeView from '../home-view';
import LoginView from './login-view';
import DirectorView from './director-view';


class AuthWrapper extends React.Component {
    render() {
        if (this.props.user.role === 'user') {
            return (
                <div>
                    <Redirect from="/" to="/UserHome" component={HomeView} />
                </div>
            );
        } if (this.props.user.role === 'director') {
            return (
                <Redirect from="/" to="/DirectorView" component={DirectorView} />
            );
        }
        return (
            <LoginView />
            // <Redirect from="/" to="/login" component={LoginView} />
        );
    }
}

const mapStateToProps = state => ({
    user: state.user.profile,
});

export default connect(mapStateToProps)(AuthWrapper);
