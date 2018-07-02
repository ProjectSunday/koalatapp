import React from 'react';
import TextInput from './text-input';

class EditForm extends React.Component {
    render() {
        return (
            <div>
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

                    <TextInput
                        name="Points"
                        label="Points"
                        value={this.props.user.points}
                        onChange={this.props.onChange}
                    />

                    <input
                        type="submit"
                        disabled={this.props.saving}
                        className="btn btn-primary"
                        onClick={this.props.onSave}
                    />
                </form>
            </div>
        );
    }
}


export default EditForm;
