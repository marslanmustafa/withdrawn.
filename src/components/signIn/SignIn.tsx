import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { signInHandler } from "../../firebase/auth";
import "./signIn.css";
import { useNavigate } from "react-router-dom";

interface FormValues {
  email: string;
  password: string;
}

interface SignInProps {
  handleSignUpClick: () => void;
}

const SignIn: React.FC<SignInProps> = (props) => {
  const navigate = useNavigate();
  const [msg, setMsg] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  const onFinish = async (values:FormValues) => {
    try {
      await signInHandler(values.email, values.password);
      console.log("Sign in successful!");
      setSuccess("Sign in successful!");
      setTimeout(() => {
        setSuccess("");
        navigate("/search");
      }, 3000);
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
      }, 3000);
    }
  };

  // const onFinishFailed = (errorInfo: any) => {
  //   console.log("Failed:", errorInfo);
  // };
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
    },
  };

  return (
    <div className="signIn">
      <Form<FormValues>
        name="signInForm"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <h2>Sign In</h2>
        {!success?<p className="errMsg">{msg}</p>:<p className="successMsg">{success}</p> }
        
        <Form.Item
          className="inputBox0"
          label="Email"
          name="email"
          rules={[{ type: 'email', required: true, message: 'Please input your email!' }]}
        >
          <Input placeholder="Enter Email" />
        </Form.Item>
        <Form.Item
          className="inputBox0"
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password placeholder="Enter Password" />
        </Form.Item>
        <Form.Item >
          <Button type="primary" htmlType="submit" className="signBtn">
            Sign In
          </Button>
        </Form.Item>
      </Form>
      <div className="others">
        <p>
          Create your new account?{" "}
          <button type="button" onClick={props.handleSignUpClick}>SignUp</button>
        </p>
        {/* <p>Forgot Password</p> */}
      </div>
    </div>
  );
};

export default SignIn;
