// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXjGgJe9PHfcP6YG8-tPQ9KTuk9OuvIY0",
  authDomain: "blogproject-52b94.firebaseapp.com",
  projectId: "blogproject-52b94",
  storageBucket: "blogproject-52b94.appspot.com",
  messagingSenderId: "475435528659",
  appId: "1:475435528659:web:8c7210a6fec5874831ff26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider;