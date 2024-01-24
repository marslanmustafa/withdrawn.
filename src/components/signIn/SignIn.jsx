import React, { useState } from "react";
import { signInHandler } from "../../firebase/auth";
// import {Link} from 'react-router-dom'
import "./signIn.css";

const SignIn = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState("");
  const [msg, setMsg] = useState("");
  const [success, setSuccess] = useState("");


  const handleSignInClick = async (event) => {
    event.preventDefault();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if the email is valid
    if (!emailPattern.test(email)) {
      setEmailError("Enter a valid email");
      return; // Exit the function if the email is not valid
    }
    if(password.length <= 0) {
      setPasswordError("Please Enter Password");
      return; // Exit the function if the password is too short
    }
    else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      return; // Exit the function if the password is too short
    }

    // Call signInHandler with user input
    try {
      await signInHandler(email, password);
      console.log("Sign in successful!");
      setSuccess("Sign in successful!");
      setTimeout(() => {
        setSuccess("");
      }, 5000);
      // Optionally, you can redirect the user or perform other actions after successful sign-in
    } catch (error) {
      // Handle sign-in errors
      console.error("Sign in error:", error.message);
      setMsg(error.message);
      setTimeout(() => {
        setMsg("");
      }, 5000);
    }
  };
  return (
    <>
      <div className="signIn">
        <form className="form">
          <h2>Sign In</h2>
          <p className="errMsg">{msg}</p>
          <p className="successMsg">{success}</p>
          <div className="inputBox0">
            <span>Email</span>
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => {setEmail(e.target.value)
              setEmailError(''); // Clear the error when the user types
              }}
              required
            />
            {emailError && <p className="errMsg">{emailError}</p>}
          </div>
          <div className="inputBox0">
            <span>Password</span>
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setPasswordError(""); // Clear the error when the user types
              }}
              required
            />
            {passwordError && <p className="errMsg">{passwordError}</p>}
          </div>
          <button className="signBtn" onClick={handleSignInClick}>
            Sign In
          </button>
        </form>
        <div className="others">
          <p>
            Create your new account?{" "}
            <button onClick={props.handleSignUpClick}>SignUp</button>
          </p>
          <p>Forgot Password</p>
        </div>
      </div>
    </>
  );
};

export default SignIn;
