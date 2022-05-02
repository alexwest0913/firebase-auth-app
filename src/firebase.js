// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBM-skNuy28hIH6Yy-Az2F1Y49NUL6kyTM",
  authDomain: "fir-auth-app-da671.firebaseapp.com",
  projectId: "fir-auth-app-da671",
  storageBucket: "fir-auth-app-da671.appspot.com",
  messagingSenderId: "658633187147",
  appId: "1:658633187147:web:f227cdf547a5bd2ae0d2ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
