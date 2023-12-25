// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {GoogleAuthProvider, getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4jMhNsTmI6AfRyvd9lVFrGWmEaNYl0XE",
  authDomain: "react-firechat-11882.firebaseapp.com",
  projectId: "react-firechat-11882",
  storageBucket: "react-firechat-11882.appspot.com",
  messagingSenderId: "58195076946",
  appId: "1:58195076946:web:7c57c58847b872b9d2bc8b",
  measurementId: "G-JWZE51SRKW"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const provider=new GoogleAuthProvider()
export const db= getFirestore()