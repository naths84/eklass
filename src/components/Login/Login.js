import React, {useState} from "react";

import handleGoogleAuth from "utils/googleAuth";
import { auth } from 'config/firebase';

const Login = () => {
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
  }

  const handlePasswordAuth = async () => {
    try {
      await auth.signInWithEmailAndPassword(emailValue, passwordValue);
    } catch (error) {
      console.error(error) ;
    }
  }

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <h3>Login</h3>

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

        <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <button type="submit" className="btn btn-primary btn-block" onClick={handlePasswordAuth}>
          Submit
        </button>
        {/* <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p> */}
        <p className="forgot-password text-center">
          Don't have an account yet ? <a href="/signup">Register here</a>
        </p>
      </form>
      <button onClick={handleGoogleAuth}>login with google</button>
    </>
  );
};

export default Login;
