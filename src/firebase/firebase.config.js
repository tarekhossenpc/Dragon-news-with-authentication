// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnPuPz4oAvs3HOUY4EK0zVFVXbtDrX0g0",
  authDomain: "dragon-news-breaking-b614f.firebaseapp.com",
  projectId: "dragon-news-breaking-b614f",
  storageBucket: "dragon-news-breaking-b614f.firebasestorage.app",
  messagingSenderId: "782896346860",
  appId: "1:782896346860:web:1229f72fcf51eca24317c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);