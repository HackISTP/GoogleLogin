// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRqYIJaW1lTRJ2Ld1pStkSz9oLa7JNisM",
  authDomain: "shoppy-ea41e.firebaseapp.com",
  databaseURL:
    "https://shoppy-ea41e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "shoppy-ea41e",
  storageBucket: "shoppy-ea41e.appspot.com",
  messagingSenderId: "1000967275707",
  appId: "1:1000967275707:web:cf75cff96f15ef607f559e",
  measurementId: "G-Q1KMWMEGPT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
