import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../_Styles/navbar.scss';

class Navbar extends React.Component {
    render() {
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
                            <Link to="/Venues">Venues</Link>
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
