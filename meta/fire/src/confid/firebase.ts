// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCskujeGLj2NgJ6MMvGBQd60r3FvLSgFOc",
  authDomain: "newreact-dc2db.firebaseapp.com",
  projectId: "newreact-dc2db",
  storageBucket: "newreact-dc2db.appspot.com",
  messagingSenderId: "1033549576930",
  appId: "1:1033549576930:web:70b2dcc2516ed3db1d3cbb",
  measurementId: "G-ZNLNWY4XM8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const provider=new GoogleAuthProvider();


