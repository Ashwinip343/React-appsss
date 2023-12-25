// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCcwbSgmSzbw_4recxdjrysg7zjYxXfws",
  authDomain: "social0app-331b0.firebaseapp.com",
  projectId: "social0app-331b0",
  storageBucket: "social0app-331b0.appspot.com",
  messagingSenderId: "242138890669",
  appId: "1:242138890669:web:5657653b085dfed16c2124"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app);
export const provider=new GoogleAuthProvider();
export const db=getFirestore(app)
