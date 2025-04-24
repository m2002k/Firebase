// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAJERo5WDCRFtuUv_WaRM7QXtI0nLbvtWg",
    authDomain: "start-fcdf3.firebaseapp.com",
    projectId: "start-fcdf3",
    storageBucket: "start-fcdf3.firebasestorage.app",
    messagingSenderId: "555098053588",
    appId: "1:555098053588:web:eec2fd847176497e619441",
    measurementId: "G-79X3VJ0LJS"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
