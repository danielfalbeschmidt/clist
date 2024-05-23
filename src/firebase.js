// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAU8_GUdOPAoMRT7IgnrKglzHK11ZTGO9c",
  authDomain: "clist-firebase.firebaseapp.com",
  projectId: "clist-firebase",
  storageBucket: "clist-firebase.appspot.com",
  messagingSenderId: "1091479768610",
  appId: "1:1091479768610:web:143b8189577e2ed1b3847b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
