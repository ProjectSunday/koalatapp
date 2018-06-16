import React from 'react';
import '../_Styles/user-profile.scss';
import James from '../_Styles/Imgs/James.jpg';

class UserProfile extends React.Component {
    render () {
        const user = {
            firstName: "James",
            lastName: "Boyer",
            img: {James},
            email: "jamesboyer@boyer.com",
            city: "indianapolis",
            ID: 123,
        }
        return (
            <div className="user-profile-container">
                <div className="user-content">
                    <img src={James} />
                    <h4>{user.firstName} {user.lastName}</h4>   
                    <h4>Email: {user.email}</h4>
                    <h4>City: {user.city}</h4>
                    <h4>Member ID: {user.ID}</h4>
                    
                </div>
            </div>

              

        )
    }
}

export default UserProfile;