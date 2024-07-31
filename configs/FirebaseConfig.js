// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: "aipoweredtravelplannerapp.firebaseapp.com",
  projectId: "aipoweredtravelplannerapp",
  storageBucket: "aipoweredtravelplannerapp.appspot.com",
  messagingSenderId: "370581023785",
  appId: "1:370581023785:web:974c5a5988e773eb234038",
  measurementId: "G-8XHX4HZDFW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

