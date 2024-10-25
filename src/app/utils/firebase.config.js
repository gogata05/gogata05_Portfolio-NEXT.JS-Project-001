// src\app\utils\firebase.config.js
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHJSHRWne_PLQ8Dixo-XJuTeWWZG1XboA",
  authDomain: "gogata05portfolio.firebaseapp.com",
  projectId: "gogata05portfolio",
  storageBucket: "gogata05portfolio.appspot.com",
  messagingSenderId: "295658935791",
  appId: "1:295658935791:web:298de976ea4ffe0886521a",
  measurementId: "G-TEYRB3GL43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
