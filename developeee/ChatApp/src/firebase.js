
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD5WXWzgIlaMz1FBR8pkmzy2PVEC5PeyBc",
  authDomain: "chatatata-f9025.firebaseapp.com",
  projectId: "chatatata-f9025",
  storageBucket: "chatatata-f9025.appspot.com",
  messagingSenderId: "539161520595",
  appId: "1:539161520595:web:209b84ab4157b366d5a726",
  measurementId: "G-6H7170RP35"
};



// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const storage = getStorage();
export const db=getFirestore();
