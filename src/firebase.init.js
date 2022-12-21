// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: process.env.REACT_APP_API_KEY,
  // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_APP_ID,

  apiKey: "AIzaSyCeGLc8uOw5BQ2Ax5zgtz8y5L-NHw_ld2g",
  authDomain: "store-management-c362e.firebaseapp.com",
  projectId: "store-management-c362e",
  storageBucket: "store-management-c362e.appspot.com",
  messagingSenderId: "540820808175",
  appId: "1:540820808175:web:7f2599ad7c2fb2ebd5561a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app)
export default auth;