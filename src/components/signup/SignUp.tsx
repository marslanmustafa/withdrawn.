import React, { useState } from "react";
import { signUpHandler } from "../../firebase/auth";
import "./signUp.css";
import { Form, Input, Button } from 'antd';
interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
interface SignUpProps {
  handleLoginClick: () => void;
}

const SignUp: React.FC<SignUpProps> = (props) => {
const [msg, setMsg] = useState<string>("");
const [success, setSuccess] = useState<string>("");

const onFinish = async (values: FormValues ) => {
    try {
      const response = await signUpHandler(values.email, values.password);
      console.log(response, "response");
      setSuccess("User created successfully");
      setTimeout(() => {
        setSuccess("");
        props.handleLoginClick();
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
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
    },
  };

  return (
    <>
      <div className="signUp">
        <Form<FormValues>
      name="signUpForm"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      validateMessages={validateMessages}
      className="form"
    >
          <h2>Sign Up</h2>
          <p className="errMsg">{msg}</p>
          <p className="successMsg">{success}</p>
          <div className="box01">
          <Form.Item
          className="inputBox01"
        label="First Name"
        name="firstName"
        rules={[{ required: true, message: 'Please enter first name!' }]}
      >
        <Input placeholder="First Name"/>
      </Form.Item>
      <Form.Item
          className="inputBox01"
        label="Last Name"
        name="lastName"
        rules={[{ required: true, message: 'Please enter last name!' }]}
      >
        <Input placeholder="Last Name"/>
      </Form.Item>
          </div>
          <Form.Item
          className="inputBox1"
        label="Email"
        name="email"
        rules={[{ type: 'email', required: true, message: 'Please input your email!' }]}
      >
        <Input placeholder="Enter Email"/>
      </Form.Item>
      <Form.Item
      className="inputBox1"
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
          <Input.Password placeholder="Enter Password" />
      </Form.Item>
      <Form.Item 
      >
        <Button type="primary" htmlType="submit" className="signBtn">
          Sign Up
        </Button>
      </Form.Item>
        </Form>
        <div className="others">
          <p>
            Already have an account ?{" "}
            <button type="button" onClick={props.handleLoginClick}>LogIn</button>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUp;
