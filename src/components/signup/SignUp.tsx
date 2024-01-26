import React, { useState, ChangeEvent, FormEvent } from "react";
import { signUpHandler } from "../../firebase/auth";
import "./SignUp.css";

interface SignUpProps {
  handleLoginClick: () => void;
}

const SignUp: React.FC<SignUpProps> = (props) => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [firstNameError, setFirstNameError] = useState<string>("");
  const [lastNameError, setLastNameError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [msg, setMsg] = useState<string>("");

  const handleSignUpClick = async (event: FormEvent) => {
    event.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if the first name is valid
    if (firstName.trim() === "") {
      setFirstNameError("First name is required");
      return; // Exit the function if the first name is empty
    }

    // Check if the last name is valid
    if (lastName.trim() === "") {
      setLastNameError("Last name is required");
      return; // Exit the function if the last name is empty
    }

    // Check if the email is valid
    if (!emailPattern.test(email)) {
      setEmailError("Enter a valid email");
      return; // Exit the function if the email is not valid
    }
    if (password.length <= 0) {
      setPasswordError("Please Enter Password");
      return; // Exit the function if the password is too short
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      return; // Exit the function if the password is too short
    }

    try {
      const response = await signUpHandler(email, password);
      console.log(response, "response");
      props.handleLoginClick();
    } catch (error) {
      if (error instanceof Error && error.message) {
        console.error("Sign up error", error.message);
        setMsg(error.message);
      } else {
        console.error("Sign up error:", error);
        setMsg("An unknown error occurred");
      }
      setTimeout(() => {
        setMsg("");
      }, 5000);
    }
  };

  return (
    <>
      <div className="signUp">
        <form className="form">
          <h2>Sign Up</h2>
          <p className="errMsg">{msg}</p>
          <div className="box01">
            <div className="inputBox01">
              <span>First Name</span>
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setFirstName(e.target.value);
                  setFirstNameError(""); // Clear the error when the user types
                }}
                required
              />
            </div>
            <div className="inputBox01">
              <span>Last Name</span>
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setLastName(e.target.value);
                  setLastNameError(""); // Clear the error when the user types
                }}
                required
              />
            </div>
          </div>
          {lastNameError && <p className="errMsg">{lastNameError}</p>}
          {firstNameError && <p className="errMsg">{firstNameError}</p>}
          <div className="inputBox0">
            <span>Email</span>
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setEmail(e.target.value);
                setEmailError(""); // Clear the error when the user types
              }}
              required
            />
            {emailError && <p className="errMsg">{emailError}</p>}
          </div>
          <div className="inputBox1">
            <span>Password</span>
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setPassword(e.target.value);
                setPasswordError(""); // Clear the error when the user types
              }}
              required
            />
            {passwordError && <p className="errMsg">{passwordError}</p>}
          </div>
          <button className="signBtn" onClick={handleSignUpClick}>
            Sign Up
          </button>
        </form>
        <div className="others">
          <p>
            Already have an account ?{" "}
            <button onClick={props.handleLoginClick}>LogIn</button>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUp;
