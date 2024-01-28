import { app } from "../firebase";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, Auth, UserCredential } from "firebase/auth";

const auth: Auth = getAuth(app);

export const signUpHandler = async (email: string, password: string): Promise<UserCredential> => {
  console.log(email, 'email');
  console.log(password, 'password');
  try {
    const response: UserCredential = await createUserWithEmailAndPassword(auth, email, password);
    return response;
  } catch (error) {
    throw error;
  }
};

export const signInHandler = async (email: string, password: string): Promise<UserCredential> => {
  try {
    const response: UserCredential = await signInWithEmailAndPassword(auth, email, password);
    return response;
  } catch (error) {
    throw error;
  }
};
