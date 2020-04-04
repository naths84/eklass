import React, { useState } from "react";
import firebase from 'config/firebase';

const SignUp = () => {
        const [emailValue, setEmailValue] = useState('')
        const [passwordValue, setPasswordValue] = useState('')
        const handleEmailInputChange = e => {
            setEmailValue(e.target.value)
        }
        const handlePasswordInputChange = e => {
            setPasswordValue(e.target.value)
        }

        const handleFormSubmit = e => {
            e.preventDefault();
            console.log(emailValue);
            console.log(passwordValue);
        }
        const handlePasswordAuth = () => {
            firebase.auth().createUserWithEmailAndPassword(emailValue, passwordValue).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // ...
              });
        }
        return (
            <form onSubmit={handleFormSubmit}>

                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" value={emailValue} onChange={handleEmailInputChange}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" value={passwordValue} onChange={handlePasswordInputChange}/>
                </div>

                <button type="submit" className="btn btn-primary btn-block" onClick={handlePasswordAuth}>Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered ?<a href="/login">Login here</a>
                </p>
            </form>
        );
}
export default SignUp;
