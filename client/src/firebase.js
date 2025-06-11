// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
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

// Load analytics only in production
if (import.meta.env.PROD) {
  import("firebase/analytics").then(({ getAnalytics }) => {
    getAnalytics(app);
  }).catch((err) => {
    console.warn("Analytics failed to load:", err);
  });
}
