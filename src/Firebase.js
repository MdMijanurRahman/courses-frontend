// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB11BSg4y5mo01yo-bxzBEGL59hj0AFRS8",
  authDomain: "courses-frontend.firebaseapp.com",
  projectId: "courses-frontend",
  storageBucket: "courses-frontend.appspot.com",
  messagingSenderId: "132102556745",
  appId: "1:132102556745:web:ec2db1e68f327275634398"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);