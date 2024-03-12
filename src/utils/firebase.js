// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-QVjdTo8CNP1Dt4MAoJge3RWB0lvZdy4",
  authDomain: "netflixgpt-d4316.firebaseapp.com",
  projectId: "netflixgpt-d4316",
  storageBucket: "netflixgpt-d4316.appspot.com",
  messagingSenderId: "318482863626",
  appId: "1:318482863626:web:ee216b703709b1226c71f3",
  measurementId: "G-P7GZ0PL6EC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
