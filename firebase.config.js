import { getAuth } from "firebase/auth";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdAbC60O2gR-8MQIQ9Vz_KgRaXuYFshwc",
  authDomain: "movie-bbb38.firebaseapp.com",
  projectId: "movie-bbb38",
  storageBucket: "movie-bbb38.appspot.com",
  messagingSenderId: "169941000195",
  appId: "1:169941000195:web:a46b9e1c0505ebf337ee36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebase_Auth=getAuth(app)