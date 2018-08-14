import React from 'react';
import TextInput from './text-input';
import '_Styles/user-form.scss';
import { Avatar, IconButton, MoreVertIcon, Card, CardHeader, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';

const UserForm = (props) =>
  <div className="user-form-container">
    <Card style={{ borderRadius: '0' }}>
        <CardHeader
            avatar={(
                <Avatar>JB</Avatar>
            )}
            title={props.user.givenName}
            style={{ fontFamily: 'Julius Sans One', fontSize: '20',}}
        />

        <div className="img-box">
        <CardMedia
            style={{ paddingTop: '56.25%', borderRadius: '100px', width: '200px', margin: 'auto' }}
            image={props.user.imageUrl}
        />
        </div>
        <CardContent>
        <form style={{display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'space-between'}}>
                <TextInput
                name="firstName"
                label="First Name"
                value={props.user.givenName}
                onChange={props.onChange}
            />

            <TextInput
                name="lastName"
                label="Last Name"
                value={props.user.familyName}
                onChange={props.onChange}
            />

            <TextInput
                name="img"
                label="Img"
                value={props.user.imgUrl}
                onChange={props.onChange}
            />

            <TextInput
                name="email"
                label="Email"
                value={props.user.email}
                onChange={props.onChange}
            />

            <input
                type="submit"
                disabled={props.saving}
                className="btn btn-primary"
                onClick={(event)=> props.onSave, props.toggleEdit}
                style={{margin: '15px'}}
            />
        </form>   
        </CardContent>
    </Card>

  </div>
                

export default UserForm;
