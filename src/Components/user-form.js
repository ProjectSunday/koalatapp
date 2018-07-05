import React from 'react';
import TextInput from './text-input';
import '_Styles/user-form.scss';
import James from '_Styles/Imgs/james.jpg';

class EditForm extends React.Component {
    render() {
        return (
            <div className="edit-user-form">
                <div className="edit-form-content">
                    <div className="head" />
                        <img src={ James } />
                    <div className="form-container">
                    <form>
                         <TextInput
                            name="firstName"
                            label="First Name"
                            value={this.props.user.firstName}
                            onChange={this.props.onChange}
                        />

                        <TextInput
                            name="lastName"
                            label="Last Name"
                            value={this.props.user.lastName}
                            onChange={this.props.onChange}
                        />

                        <TextInput
                            name="img"
                            label="Img"
                            value={this.props.user.img}
                            onChange={this.props.onChange}
                        />

                        <TextInput
                            name="email"
                            label="Email"
                            value={this.props.user.email}
                            onChange={this.props.onChange}
                        />

                        <TextInput
                            name="city"
                            label="City"
                            value={this.props.user.city}
                            onChange={this.props.onChange}
                        />

                        <TextInput
                            name="ID"
                            label="ID"
                            value={this.props.user.ID}
                            onChange={this.props.onChange}
                        />

                        <input
                            type="submit"
                            disabled={this.props.saving}
                            className="btn btn-primary"
                            onClick={(event)=> this.props.onSave, this.props.toggleEdit}
                        />

                    </form>
                    </div>
                </div>
            </div>
        );
    }
}


export default EditForm;
