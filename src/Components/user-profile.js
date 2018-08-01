import React from 'react';
import '../_Styles/user-profile.scss';
import { connect } from 'react-redux';
import James from '_Styles/Imgs/james.jpg';
import { updateUser } from '../Actions/userActions';
import UserForm from './user-form';


class UserProfile extends React.Component {
    constructor(props, context) {
        super(props, context);


        this.state = {
            isEditing: false,

        };

        this.saveUserState = this.saveUserState.bind(this);
        this.updateUserState = this.updateUserState.bind(this);
        this.toggleEdit = this.toggleEdit.bind(this);
    }


    componentWillReceiveProps(nextProps) {
        if (this.props.user.ID !== nextProps.user.ID) {
            this.setState({ user: nextProps.user });
        }
    }

    saveUserState(event) {
        const { user } = this.state;
        event.preventDefault();
        updateUser(user);
    }

    toggleEdit() {
        this.setState({ isEditing: !this.state.isEditing });
    }

    updateUserState(event) {
        const field = event.target.name;
        const { user } = this.state;
        user[field] = event.target.value;
        return this.setState({ user });
    }


    render() {
        if (this.state.isEditing) {
            return (
                <div>
                    <UserForm
                        user={this.props.user}
                        onSave={this.saveUserState}
                        onChange={this.updateUserState}
                        toggleEdit={this.toggleEdit}
                    />
                </div>
            );
        }

        return (
            <div className="user-profile-container">
                <div className="user-content">

                    <div className="head" />
                    <img src={James} alt="j" />
                    <div className="user-profile-body">
                        <h4>{this.props.user.profile.firstName} {this.props.user.profile.lastName}</h4>
                        <h4>Email: {this.props.user.profile.email}</h4>
                        <h4>Points: {this.props.user.score}</h4>
                        <button onClick={this.toggleEdit}>Edit</button>
                    </div>
                </div>
            </div>


        );
    }
}

const mapStateToProps = state => ({
    user: state.user,
});


export default connect(mapStateToProps)(UserProfile);
