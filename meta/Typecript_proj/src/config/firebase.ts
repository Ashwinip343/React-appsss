// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth, GoogleAuthProvider} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGB89uXoeDgi8JiJ7R05EviMVbGaCVKMw",
  authDomain: "react-course-e6b44.firebaseapp.com",
  projectId: "react-course-e6b44",
  storageBucket: "react-course-e6b44.appspot.com",
  messagingSenderId: "588546328696",
  appId: "1:588546328696:web:ff0fa7f59b1fe5a199458d",
  measurementId: "G-ZWHN5BTZ3D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app);
export const provider= new GoogleAuthProvider();
