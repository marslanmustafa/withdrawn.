import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { signInHandler } from "../../firebase/auth";
import "./signIn.css";
import { useNavigate } from "react-router-dom";
import firebase from "firebase/compat/app";
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

  const onFinish = async (values: FormValues) => {
    try {
      await signInHandler(values.email, values.password);
      console.log("Sign in successful!");
      setSuccess("Sign in successful!");
      setTimeout(() => {
        setSuccess("");
        navigate("/search");
      }, 3000);
    } catch (error) {
      if (error instanceof Error && 'code' in error) {
        switch ((error as firebase.auth.Error).code) {
          case 'auth/invalid-credential':
            setMsg('Wrong Credentials. Please try again.');
            break;
          case 'auth/user-not-found':
            setMsg('Wrong Credentials. Please try again.');
            break;
          case 'auth/wrong-password':
            setMsg('Wrong Credentials. Please try again.');
            break;
          default:
            setMsg('An unknown authentication error occurred');
        }
      } else if (error instanceof Error && error.message) {
        setMsg(error.message);
      } else {
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
    <div className="signIn">
      <Form<FormValues>
        name="signInForm"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <h2>Sign In</h2>
        {!success ? <p className="errMsg">{msg}</p> : <p className="successMsg">{success}</p>}

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
      </div>
    </div>
  );
};

export default SignIn;
