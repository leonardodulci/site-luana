// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdxJd-E4a2cL664EjazEwvD2dQPxT4EhM",
  authDomain: "siteluanagomes.firebaseapp.com",
  projectId: "siteluanagomes",
  storageBucket: "siteluanagomes.appspot.com",
  messagingSenderId: "314890403435",
  appId: "1:314890403435:web:841e179bd16d1c9b6fbb2e",
  measurementId: "G-LDQ3Q1TBQQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);