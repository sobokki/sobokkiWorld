// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "sobokkiworld.firebaseapp.com",
  projectId: "sobokkiworld",
  storageBucket: "sobokkiworld.appspot.com",
  messagingSenderId: "960408341297",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
// Initialize Firestore
const db = getFirestore(app);

export { db };