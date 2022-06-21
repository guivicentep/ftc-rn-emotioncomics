// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQdEbpeXdI6vehjooKhzL8XBDayr6_F28",
  authDomain: "auth-emotioncomics.firebaseapp.com",
  projectId: "auth-emotioncomics",
  storageBucket: "auth-emotioncomics.appspot.com",
  messagingSenderId: "649077155926",
  appId: "1:649077155926:web:1c39173970c75a38f773f7"
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);