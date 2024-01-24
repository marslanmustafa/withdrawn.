import React from 'react'
// import {Link} from 'react-router-dom'
import './signIn.css'

const SignIn = (props) => {
  return (
    <>
    <div className="signIn">
        <form className="form">
          <h2>Sign In</h2>
          <div className="inputBox0">
            <span>Email</span>
            <input type="email" placeholder="Enter Email" required />
          </div>
          <div className="inputBox0">
            <span>Password</span>
            <input type="password" required placeholder="Enter Password" />
          </div>
          <button className='signBtn'>Sign In</button>
        </form>
        <div className="others">
        <p>Create your new account? <button onClick={props.handleSignUpClick}>SignUp</button></p>
        <p>Forgot Password</p>
        </div>
      </div>
    </>
  )
}

export default SignIn