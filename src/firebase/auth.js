import { app } from "../firebase";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(app);

export const signUpHandler = async (email, password) => {
    console.log(email, 'email')
    console.log(password, 'password')
  try {
    const response = await createUserWithEmailAndPassword(auth, email, password);
    return response;
  } catch (error) {
    console.error("Sign up error:", error);
    throw error;
  }
};

export const signInHandler = async (email, password) => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      return response;
    } catch (error) {
      console.error("Sign in error:", error.message);
      throw error;
    }
  };