import React, { useState } from "react";
import { navigate } from "@reach/router"

import createUserWithEmailAndPassword from 'utils/registerUserWithEmailAndPassword';


const SignUp = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [registrationError, setRegistrationError] = useState(null);

  const handleEmailInputChange = (e) => {
    setEmailValue(e.target.value);
  };

  const handlePasswordInputChange = (e) => {
    setPasswordValue(e.target.value);
  };

  const handleDisplayNameInputChange = e => {
    setDisplayName(e.target.value);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(emailValue);
    console.log(passwordValue);

    handlePasswordAuth(emailValue, passwordValue, displayName);
  };

  const handlePasswordAuth = async (emailValue, passwordValue, displayName) => {
    try {
      const submission = await createUserWithEmailAndPassword(emailValue, passwordValue)
      if (submission.type === 'error') {
        setRegistrationError(submission);
      }

      if (submission.type === 'success') {
        navigate('/');
      }
      console.log(submission.message);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <h3>Sign Up</h3>

    {registrationError && <h3>{registrationError.message}</h3>}
      <div className="form-group">
        <label>Name</label>
        <input 
            type="text" 
            className="form-control" 
            placeholder="First name" 
            value={displayName}
            onChange={handleDisplayNameInputChange}
        />
      </div>

      <div className="form-group">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          value={emailValue}
          onChange={handleEmailInputChange}
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          value={passwordValue}
          onChange={handlePasswordInputChange}
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary btn-block"
      >
        Sign Up
      </button>
      <p className="forgot-password text-right">
        Already registered ?<a href="/login">Login here</a>
      </p>
    </form>
  );
};
export default SignUp;
