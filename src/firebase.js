// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBn747V14YY8DVLp6mIAOx30uuf9yXd1X8",
  authDomain: "auth-production-50755.firebaseapp.com",
  projectId: "auth-production-50755",
  storageBucket: "auth-production-50755.appspot.com",
  messagingSenderId: "355755437605",
  appId: "1:355755437605:web:fefad7906e54c124cd59cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
