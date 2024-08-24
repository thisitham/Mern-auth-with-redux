// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-25789.firebaseapp.com",
  projectId: "mern-auth-25789",
  storageBucket: "mern-auth-25789.appspot.com",
  messagingSenderId: "29013813184",
  appId: "1:29013813184:web:828a8e329e836234bc4a25"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);