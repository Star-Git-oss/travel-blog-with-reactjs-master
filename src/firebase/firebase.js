// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrtO6GceXWaVp_zCQQMYXlCLw5j-iLbfQ",
  authDomain: "travel-blog-with-reactjs.firebaseapp.com",
  projectId: "travel-blog-with-reactjs",
  storageBucket: "travel-blog-with-reactjs.appspot.com",
  messagingSenderId: "1026040826402",
  appId: "1:1026040826402:web:a683445dfa2c1a840a187b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);