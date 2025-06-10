// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "estatestake-mern.firebaseapp.com",
  projectId: "estatestake-mern",
  storageBucket: "estatestake-mern.firebasestorage.app",
  messagingSenderId: "346994878284",
  appId: "1:346994878284:web:d300648c87869e854291e9",
  measurementId: "G-LXDDB3W4RN"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);