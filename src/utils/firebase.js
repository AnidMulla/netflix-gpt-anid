// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDliRzQOLU54U564Sum5vVTpAVmmdXK5R4",
  authDomain: "netflixgpt-63441.firebaseapp.com",
  projectId: "netflixgpt-63441",
  storageBucket: "netflixgpt-63441.appspot.com",
  messagingSenderId: "437777194778",
  appId: "1:437777194778:web:d28ab9a01d9e4444fbd6a3",
  measurementId: "G-2N8GCKLNLV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
