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

import { Auth } from 'aws-amplify';

window.googleInit = function () {
    // gapi.load('auth2', function() {
    //     gapi.auth2.init({
    //         client_id: '191304805062-d0rck99u7ej5j0329q0e9gvsa5tj4a4t.apps.googleusercontent.com'
    //     })

    //     const gAuth = window.gapi.auth2.getAuthInstance();
    //     gAuth.signIn().then(gUser => {
    //         const { id_token, expires_at } = gUser.getAuthResponse();
    //         const profile = gUser.getBasicProfile();
    //         const user = {
    //             email: profile.getEmail(),
    //             name: profile.getName()
    //         }
    //         // console.log('yooo', gUser.getBasicProfile())
    //         Auth.federatedSignIn(
    //             'google',
    //             {
    //                 token: id_token,
    //                 expires_at
    //             },
    //             user
    //         ).then((cred) => {
    //             console.log('aws cred', cred)
    //         })
    //     })

    //  });


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
    constructor() {
        super();
        const script = document.createElement('script');

        // <script src="https://apis.google.com/js/platform.js?onload=init" async defer></script>
        script.src = "https://apis.google.com/js/platform.js?onload=googleInit"
        script.defer = true;
        script.async = true;
        document.head.appendChild(script);
    }
    signInClicked() {
        gapi.load('auth2', function() {
            gapi.auth2.init({
                client_id: '191304805062-d0rck99u7ej5j0329q0e9gvsa5tj4a4t.apps.googleusercontent.com'
            })
    
            const gAuth = window.gapi.auth2.getAuthInstance();
            gAuth.signIn().then(gUser => {
                const { id_token, expires_at } = gUser.getAuthResponse();
                const profile = gUser.getBasicProfile();
                const user = {
                    email: profile.getEmail(),
                    name: profile.getName()
                }
                // console.log('yooo', gUser.getBasicProfile())
                Auth.federatedSignIn(
                    'google',
                    {
                        token: id_token,
                        expires_at
                    },
                    user
                ).then((cred) => {
                    console.log('aws cred', cred)
                })
            })
    
        });
    }
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
                */}
                {/* <div className="signup">
                    <div className="g-signin2" data-onsuccess="onSignIn"></div>
                </div> */}

                <button onClick={this.signInClicked}>signin</button>
            </div>

        );
    }
}

export default UserSignup;