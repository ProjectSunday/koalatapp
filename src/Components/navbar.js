import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// import KoalaRoutes from '../routes';
import '../_Styles/navbar.scss';
import LoginView from './login-view';
// import UserProfile from './user-profile';

// const userRole = 'player';

class Navbar extends React.Component {
    render() {
        console.log(this.props);
        if (this.props.user.role === 'user') {
            return (
                <div className="navbar">
                    <ul>
                        <li>
                            <Link to="/UserHome">Home</Link>
                        </li>
                        <li>
                            <Link to="/userprofile"> Profile</Link>
                        </li>
                    </ul>
                </div>
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
                            <Link to="/DirectorProfile"> Profile</Link>
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
    user: state.user.user,
});
export default connect(mapStateToProps)(Navbar);
