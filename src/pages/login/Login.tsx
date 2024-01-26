import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUpWithGoogle } from "../../firebase/google";
import Logo from "../../ui/logo/Logo";
import { ArrowLeft } from "lucide-react";
import { google, apple, appleBlack, facebook } from '../../assets/index'
import SignUp from "../../components/signup/SignUp";
import SignIn from "../../components/signin/SignIn";
import "./Login.css";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [logIn, setLogIn] = useState<boolean>(false);
  const [signUp, setSignUp] = useState<boolean>(false);

  const googleAuthHandler = async () => {
    try {
      const response = await signUpWithGoogle();
      if (response.user?.uid) {
        navigate("/search");
      } else {
        console.error("Google authentication failed");
      }
    } catch (error) {
      if (error instanceof Error && error.message) {
        console.error("Google authentication error:", error.message);
      }
    }
  };

  const handleLoginClick = () => {
    setLogIn(true);
    setSignUp(false);
  };

  const handleSignUpClick = () => {
    setLogIn(false);
    setSignUp(true);
  };

  const handleBackButtonClick = () => {
    setLogIn(false);
    setSignUp(false);
  };

  return (
    <div className="loginPage">
      <div className="log">
        <Logo />
        {!logIn && !signUp ? (
          <div className="initial">
            <p className="disc">
              INSIDE KNOWLEDGE <br /> TO ALL LISTINGS <br /> ON THE MARKET,
              <br /> EXPIRED & WITHDRAWN.
            </p>
          </div>
        ) : (
          <div className="forms">
            <div className="backbtn">
              <ArrowLeft
                onClick={handleBackButtonClick}
                className="backbtnArrow"
              />
            </div>
            {signUp ? (
              <SignUp handleLoginClick={handleLoginClick} />
            ) : (
              <SignIn handleSignUpClick={handleSignUpClick} />
            )}
          </div>
        )}
      </div>
      <div className="authButtonDiv">
        <div className="authButtons">
          {!logIn && !signUp ? (
            <div className="entryButtons">
              <button onClick={handleLoginClick}>Log In</button>
              <button onClick={handleSignUpClick}>Sign Up</button>
            </div>
          ) : (
            <div></div>
          )}
          <p className="or">Or LogIn With</p>
          <div className="otherEntryButtons">
            <button onClick={() => googleAuthHandler()}>
              <div className="icon">
                <img src={google} alt="" />
              </div>
              <span>continue with Google</span>
            </button>
            <button>
              <div className="icon">
                <img
                  src={window.innerWidth > 768 ? appleBlack : apple}
                  alt=""
                />
              </div>
              <span>continue with Apple</span>
            </button>
            <button>
              <div className="icon">
                <img src={facebook} alt="" />
              </div>
              <span>continue with Facebook</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
