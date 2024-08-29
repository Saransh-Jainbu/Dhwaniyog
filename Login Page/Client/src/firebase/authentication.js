import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAwjYIK5EeouZwdoeiCSfx-q41BtmZSsqs",
  authDomain: "dhwaniyog.firebaseapp.com",
  projectId: "dhwaniyog",
  storageBucket: "dhwaniyog.appspot.com",
  messagingSenderId: "653387988150",
  appId: "1:653387988150:web:100e2b26558337baca3a17",
  measurementId: "G-4NBKQFN9TD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app, auth};
