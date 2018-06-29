import React from 'react';
import '../_Styles/user-profile.scss';
import James from '../_Styles/Imgs/James.jpg';

class UserProfile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditing: false
        }

        this.toggleEdit = this.toggleEdit.bind(this);
    }

    toggleEdit() {
        this.setState({isEditing: !this.state.isEditing});
    }

    render () {

        if(this.state.isEditing) {
            return (
                <div>
                  <h1>EDIT SCREEN!</h1>
                  <button onClick={this.toggleEdit}>Done Editing </button>
                </div>
            )
        }
        const user = {
            firstName: "James",
            lastName: "Boyer",
            img: {James},
            email: "jamesboyer@boyer.com",
            city: "indianapolis",
            ID: 123,
            points: 24,
        }
        
        return (
            <div className="user-profile-container">
                <div className="user-content">
                    <img src={James} />
                    <h4>{user.firstName} {user.lastName}</h4>   
                    <h4>Email: {user.email}</h4>
                    <h4>City: {user.city}</h4>
                    <h4>Member ID: {user.ID}</h4>
                    <h4>Points: {user.points}</h4>
                    <button onClick={this.toggleEdit}>Edit</button>
                    
                </div>
            </div>

              

        )
    }
}

export default UserProfile;