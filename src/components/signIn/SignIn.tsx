import React, { useState, ChangeEvent, FormEvent } from "react";
import { signInHandler } from "../../firebase/auth";
import "./SignIn.css";

interface SignInProps {
  handleSignUpClick: () => void;
}

const SignIn: React.FC<SignInProps> = (props) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailError, setEmailError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>("");
  const [msg, setMsg] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  const handleSignInClick = async (event: FormEvent) => {
    event.preventDefault();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setEmailError("Enter a valid email");
      return;
    }
    if (password.length <= 0) {
      setPasswordError("Please Enter Password");
      return;
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      return;
    }
    try {
      await signInHandler(email, password);
      console.log("Sign in successful!");
      setSuccess("Sign in successful!");
      setTimeout(() => {
        setSuccess("");
      }, 5000);
    } catch (error) {
      if (error instanceof Error && error.message) {
        console.error("Sign in error:", error.message);
        setMsg(error.message);
      } else {
        console.error("Sign in error:", error);
        setMsg("An unknown error occurred");
      }
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
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setEmail(e.target.value);
                setEmailError('');
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
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setPassword(e.target.value);
                setPasswordError("");
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
