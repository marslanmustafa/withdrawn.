import React from 'react'
// import { Link } from 'react-router-dom'
import './signUp.css'

const SignUp = (props) => {
  return (
    <>
    <div className="signUp">
        <form className="form">
          <h2>Sign Up</h2>
          <div className='box01'>
          <div className="inputBox01">
            <span>First Name</span>
            <input type="text" placeholder="First Name" required />
          </div>
          <div className="inputBox01">
            <span>Last Name</span>
            <input type="text" placeholder="Last Name" required />
          </div>
          </div>
          <div className="inputBox1">
            <span>Email</span>
            <input type="email" placeholder="Enter Email" required />
          </div>
          <div className="inputBox1">
            <span>Password</span>
            <input type="password" required placeholder="Enter Password" />
          </div>
          <button className='signBtn'>Sign Up</button>
        </form>
        <div className="others">
          <p>Already have an account ? <button onClick={props.handleLoginClick}>LogIn</button></p>
        </div>
      </div>
    </>
  )
}

export default SignUp