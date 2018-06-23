import React from 'react';
import './user-signup.scss';

// import signupUser from '../Actions/user-actions'

class UserSignup extends React.Component {
    render() {
        return (
            <div className="user-signup-container">
                <form>
                    <label>First Name:<input type="text" placeholder="First Name"></input> </label>
                    <label>Last Name: <input type="text" placeholder="Last Name"></input> </label>
                    <label> Password: <input type="password" placeholder="Password"></input> </label>
                    <label> Confirm Password: <input type="password" placeholder="Confirm Password"></input> </label>
                    <label> City: <input type="text" placeholder="City"></input> </label>
                    <label> ID: <input type="text" placeholder="Member ID"></input> </label>
                    <input className="submit-btn" type="submit" value="submit" />
                </form>
            </div>
        );
    }
}

export default UserSignup;