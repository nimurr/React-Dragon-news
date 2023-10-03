// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyA0HMoixZibwC0O2cp9Yxqxuo9MKCln8NA",
  authDomain: "react-dragon-news-auth-1461d.firebaseapp.com",
  projectId: "react-dragon-news-auth-1461d",
  storageBucket: "react-dragon-news-auth-1461d.appspot.com",
  messagingSenderId: "685697140873",
  appId: "1:685697140873:web:63996c95c033c264c59e58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;