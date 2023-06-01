// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJypfS6NXEvg7m15r5ZMrSKMw6Dmcf8As",
  authDomain: "challege-6e867.firebaseapp.com",
  projectId: "challege-6e867",
  storageBucket: "challege-6e867.appspot.com",
  messagingSenderId: "1032730279722",
  appId: "1:1032730279722:web:7000caebb4619a9d442853",
  measurementId: "G-8ZNJD7W2VD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const firebaseApp = firebase.initializeApp(firebaseConfig);

// initialize the database
const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
