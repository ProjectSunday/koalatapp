import React from 'react';
import './user-signup.scss';

// import sigupUser from '../Actions/user-actions'

window.onSignIn = function (googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}

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
            <div className="signup">
                <div className="g-signin2" data-onsuccess="onSignIn"></div>
            </div>

        );
    }
}

export default UserSignup;