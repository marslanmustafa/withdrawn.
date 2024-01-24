// import { FirebaseOptions, initializeApp } from "firebase/app";
import {initializeApp} from "firebase/app"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// const firebaseConfig: FirebaseOptions = {
    const firebaseConfig = {
        apiKey: "AIzaSyBPPwNonZUc4UDXrG0va_oTwLTddiKEddg",
        authDomain: "propertyapp-8a6f4.firebaseapp.com",
        projectId: "propertyapp-8a6f4",
        storageBucket: "propertyapp-8a6f4.appspot.com",
        messagingSenderId: "766804196853",
        appId: "1:766804196853:web:e95c58d028250a0a5474bc",
        measurementId: "G-VTR4GPRLQK"
      };
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);