// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOEHzuhdjkptjaboP-537DtLZPGBArhyc",
  authDomain: "app-quinchao-1ae2d.firebaseapp.com",
  projectId: "app-quinchao-1ae2d",
  storageBucket: "app-quinchao-1ae2d.firebasestorage.app",
  messagingSenderId: "939423184297",
  appId: "1:939423184297:web:54f2afdc2d4a37e47a40b8",
  measurementId: "G-TRVTWNHMV5"
};

// Initialize Firebase
const appfirebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(appfirebase);
export default appfirebase;