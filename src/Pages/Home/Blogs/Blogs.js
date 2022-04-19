import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <div>
                <h4>Question 1: Different between authorization and authentication</h4>
                <p><strong>Answer: </strong>Some different betweeen authorization and authentication</p>
                <p><strong><small>authentication</small></strong></p>
                <ul>
                    <li>Authentication defines who is the users</li>
                    <li>Authentication is the pre-starting steps of authorization</li>
                    <li>Authentication requires username and password</li>
                    <li>Authentication is visible to user and partially changeble by user</li>
                </ul>
                <p><strong><small>authorization</small></strong></p>
                <ul>
                    <li>Authorization determines what resoures a user can access</li>
                    <li>Authorization takes place after authentication</li>
                    <li>what is required for authorization is may vary depending on the security level</li>
                    <li>Authorization is not visible and changeble by user.</li>
                </ul>

            </div>
            <div>
                <h4>Question 2: Why are you using firebase? What other options do you have to implement authentication? </h4>
                <p><strong>Answer: </strong>Firebase is easy and secure to use.It provides an end to end identity soluton, supporting email
                    and password accounts, phone auth and
                    github login and more.Easy access of so many authentication system and also other service like hostiong is available in firebase
                    is the main reason to using firebase </p>
                <p><strong><small>some other authentication sytem alternative firebase</small></strong></p>
                <ul>
                    <li>STYTCH</li>
                    <li>Ory</li>
                    <li>Supabase</li>
                    <li>Okta</li>
                    <li>Pingldentity</li>
                    <li>Keycloak</li>
                    <li>Frontegg</li>
                    <li>Authress</li>
                    <li>Auth0</li>
                    <li>Amazon Cognito</li>
                    <li>One Login</li>
                </ul>
            </div>
            <div>
                <h4>Question 3: What other service does firebase provide other than authentication? </h4>
                <p><strong>Answer:</strong> Firebase provides not only authentication but also some other important service like-</p>
                <ul>
                    <li>Cloud firestore</li>
                    <li>Cloud Functions</li>
                    <li>Hosting</li>
                    <li>Cloud storage</li>
                    <li>Google Analytics</li>
                    <li>Predictions</li>
                    <li>Cloud Messaging</li>
                    <li>Dynamic Links</li>
                    <li>Remote Config</li>
                </ul>
            </div>
        </div>
    );
};

export default Blogs;