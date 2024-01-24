import "./login.css";
import { useNavigate } from "react-router-dom";
import { signUpWithGoogle } from "../../firebase/google";
import google from "../../assets/icons/google.png";
import apple from "../../assets/icons/apple.png";
import facebook from "../../assets/icons/facebook.png";
import SignUp from "../../components/signup/SignUp";
import SignIn from "../../components/signIn/SignIn";
import Logo from "../../ui/logo/Logo";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const [logIn, setLogIn] = useState(false);
  const [signUp, setSignUp] = useState(false);

  const googleAuthHandler = async () => {
    const response = await signUpWithGoogle();
    if (response.user.uid) {
      // Redirect to "/search"
      navigate('/search');
    } else {
      // Handle other cases, if needed
      console.error('Google authentication failed');
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

  // const handleBackButtonClick = () => {
  //   setLogIn(false);
  //   setSignUp(false);
  // };

  return (
    <div className="loginPage">
      <div className="log">
        <Logo />
        {/* {!logIn && !signUp ? (
          <div className="initial">
            <p className="disc">
              INSIDE KNOWLEDGE <br /> TO ALL LISTINGS <br /> ON THE MARKET,<br /> EXPIRED & WITHDRAWN.
            </p>
            <div className="entryButtons">
              <button onClick={handleLoginClick}>Log In</button>
              <button onClick={handleSignUpClick}>Sign Up</button>
            </div>
          </div>
        ) : ( */}
        <div className="forms">
          {/* <div className="backbtn">
                <ArrowLeft onClick={handleBackButtonClick} className="backbtnArrow" size={18}/>
              </div> */}
          {signUp ? (
            <SignUp handleLoginClick={handleLoginClick} />
          ) : (
            <SignIn handleSignUpClick={handleSignUpClick} />
          )}
        </div>
        {/* )} */}
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
              <img src={apple} alt="" />
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
  );
};

export default Login;
