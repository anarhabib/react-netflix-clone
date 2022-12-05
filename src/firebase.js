// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9Xis6PTkogy2ufOrYqGvFY7G0b1Zg724",
  authDomain: "react-netflix-clone-d9143.firebaseapp.com",
  projectId: "react-netflix-clone-d9143",
  storageBucket: "react-netflix-clone-d9143.appspot.com",
  messagingSenderId: "973173516043",
  appId: "1:973173516043:web:9cdecb112fa45d8b2d640e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
