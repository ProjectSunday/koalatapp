import React from 'react';
import '../_Styles/user-profile.scss';
import { connect } from 'react-redux';
import James from '_Styles/Imgs/james.jpg';
import { updateUser } from '../Actions/userActions';
import UserForm from './user-form';
import { Avatar, IconButton, MoreVertIcon, Card, CardHeader, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';


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
                <Card style={{ borderRadius: '0' }}>
                    <CardHeader
                        avatar={(<Avatar>JB</Avatar>)}
                        style={{ fontFamily: 'Julius Sans One', fontSize: '20' }}
                        title={this.props.givenName}
                        color="inherit"
                    />

                    <div className="img-box">
                        <CardMedia
                            style={{ paddingTop: '56.25%', borderRadius: '100px', width: '200px', margin: 'auto' }}
                            image={this.props.img}
                        />
                    </div>

                    <CardContent style={{ textAlign: 'center' }}>
                        <h4>Email: {this.props.email}</h4>
                        <h4>Points: {this.props.score}</h4>
                        <button onClick={this.toggleEdit}>Edit</button>
                    </CardContent>
                </Card>
            </div>


        );
    }
}

const mapStateToProps = state => ({
    user: state.user,
    givenName: state.user.givenName,
    familyName: state.user.familyName,
    img: state.user.imageUrl,
    score: state.user.points,
    email: state.user.email,
    authenticated: !!state.user._id,

});

export default connect(mapStateToProps)(UserProfile);
