// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// Import Firestore to store symptom data
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBadSp519oBkIwhv5yqoQkmtI-HfunUZ0",
  authDomain: "symtopia-2f142.firebaseapp.com",
  projectId: "symtopia-2f142",
  storageBucket: "symtopia-2f142.appspot.com",
  messagingSenderId: "465569974966",
  appId: "1:465569974966:web:40932dd71057037b9f3417",
  measurementId: "G-REW62F4HHC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore database for storing symptom reports
const db = getFirestore(app);

// Export db so other components can use it
export { db };