import { useState } from "react";
import { signUpHandler } from "../../firebase/auth";
import "./signUp.css";

const SignUp = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState("");
  const [msg, setMsg] = useState("");

  const handleSignUpClick = async (event) => {
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
    try {
      const response = await signUpHandler(email, password);
      console.log(response, "response");
      props.handleLoginClick();
    } catch (error) {
      console.error("Sign up error:", error.message);
      setMsg(error.message);
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
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="inputBox01">
              <span>Last Name</span>
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="inputBox0">
            <span>Email</span>
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailError(''); // Clear the error when the user types
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
              onChange={(e) => {
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
