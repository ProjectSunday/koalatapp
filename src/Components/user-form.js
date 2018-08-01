import React from 'react';
import TextInput from './text-input';
import '_Styles/user-form.scss';
import James from '_Styles/Imgs/james.jpg';

const UserForm = (props) => 
            <div className="edit-user-form">
                <div className="edit-form-content">
                    <div className="head" />
                        <img src={ James } />
                    <div className="form-container">
                    <form>
                         <TextInput
                            name="firstName"
                            label="First Name"
                            value={props.user.firstName}
                            onChange={props.onChange}
                        />

                        <TextInput
                            name="lastName"
                            label="Last Name"
                            value={props.user.lastName}
                            onChange={props.onChange}
                        />

                        <TextInput
                            name="img"
                            label="Img"
                            value={props.user.img}
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
                        />

                    </form>
                    </div>
                </div>
            </div>



export default UserForm;
