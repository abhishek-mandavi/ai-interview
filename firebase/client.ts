// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgaSQ2ZLqzT9cM_S1KXT-xl2uj31z9ybQ",
  authDomain: "aiinterview-e9a25.firebaseapp.com",
  projectId: "aiinterview-e9a25",
  storageBucket: "aiinterview-e9a25.firebasestorage.app",
  messagingSenderId: "496271933184",
  appId: "1:496271933184:web:401fe91b42536495447de5",
  measurementId: "G-55R7M86QGC"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);