import React from 'react';
import '../_Styles/user-profile.scss';
import James from '../_Styles/Imgs/James.jpg';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateUser } from '../Actions/userActions';
import UserForm from './user-form';

class UserProfile extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            isEditing: false,
            user: this.props.user,
        };

        this.saveUserState = this.saveUserState.bind(this);
        this.updateUserState = this.updateUserState.bind(this);
        this.toggleEdit = this.toggleEdit.bind(this);
    }

    toggleEdit() {
        this.setState({isEditing: !this.state.isEditing});
    }

    updateUserState(event) {
        const field = event.target.name;
        const user = this.state.user;
        user[field] = event.target.value;
        return this.setState({user: user})
    }

    saveUserState(event) {
        var user = this.state.user;
        event.preventDefault();
        updateUser(user);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.user.ID != nextProps.user.ID) {
            this.setState({user: nextProps.user});
        }
    }

    render () {

        if(this.state.isEditing) {
            return (
                <div>
                  <h1>EDIT SCREEN!</h1>
                  
                  <UserForm
                    user={this.state.user}
                    onSave={this.saveUserState}
                    onChange={this.updateUserState} 
                  />
                  
                  <button onClick={this.toggleEdit}>Done Editing </button>
                </div>
            )
        }
        
        return (
            <div className="user-profile-container">
                <div className="user-content">
                    <img src={James} />
                    <h4>{this.state.user.firstName} {this.props.user.lastName}</h4>   
                    <h4>Email: {this.state.user.email}</h4>
                    <h4>City: {this.state.user.city}</h4>
                    <h4>Member ID: {this.state.user.ID}</h4>
                    <h4>Points: {this.state.user.points}</h4>
                    <button onClick={this.toggleEdit}>Edit</button>

                    
                </div>
            </div>

              

        )
    }
}
const mapDispatchToProp = (dispatch) => {
    return {
        actions: bindActionCreators(userActions, dispatch)
    };
}

const mapStateToProps = (state) => {
    let user = {
        img: {}, 
        firstName: '',
        lastName: '',
        email: '',
        city: '',
        ID: '',
        points: ''    
    };

    return {
        user: state.user.user,
    }
}

export default connect(mapStateToProps)(UserProfile);
