import React from 'react';
import './user-signup.scss';

// import Amplify, { Auth } from 'aws-amplify';
// import aws_exports from 'src/aws-exports';

// import signupUser from '../Actions/user-actions'

// window.googleInit = function (googleUser) {
//     var profile = googleUser.getBasicProfile();
//     console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
//     console.log('Name: ' + profile.getName());
//     console.log('Image URL: ' + profile.getImageUrl());
//     console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
// }

window.googleInit = function () {
    console.log('googleinit')
    // gapi.load('auth2', function() { // Ready.
    //  });

    gapi.auth2.init({
        client_id: '191304805062-d0rck99u7ej5j0329q0e9gvsa5tj4a4t.apps.googleusercontent.com'
    })
    const ga = window.gapi.auth2.getAuthInstance();
    ga.signIn().then(yo => {
        console.log('yooo', yo)
    })
}


// Amplify.configure(aws_exports);

/*

var AWS = require('aws-sdk');





https://koalatapp.auth.us-east-2.amazoncognito.com/oauth2/idpresponse

Client ID	
191304805062-d0rck99u7ej5j0329q0e9gvsa5tj4a4t.apps.googleusercontent.com
Client secret	
vX1gxt0tE0324G_UhhxXwiKq
Creation date	
Jun 16, 2018, 1:31:27 PM



*/

/*
<a href="#" onclick="signOut();">Sign out</a>
<script>
  function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }
</script>

*/

/*

function signinCallback(authResult) {
  if (authResult['status']['signed_in']) {

     // Add the Google access token to the Cognito credentials login map.
     AWS.config.credentials = new AWS.CognitoIdentityCredentials({
        IdentityPoolId: 'IDENTITY_POOL_ID',
        Logins: {
           'accounts.google.com': authResult['id_token']
        }
     });

     // Obtain AWS credentials
     AWS.config.credentials.get(function(){
        // Access AWS resources here.
     });
  }
}

/ -> user authenticated -> home
/ -> !authenticateed -> /login

*/

class UserSignup extends React.Component {
    render() {
        return (
            <div>
                {/* <div className="user-signup-container">
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
                <div className="signup">
                    <div className="g-signin2" data-onsuccess="onSignIn"></div>
                </div> */}
            </div>

        );
    }
}

export default UserSignup;