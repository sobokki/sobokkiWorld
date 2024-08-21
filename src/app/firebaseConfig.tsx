import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "sobokkiworld.firebaseapp.com",
  projectId: "sobokkiworld",
  storageBucket: "sobokkiworld.appspot.com",
  messagingSenderId: "960408341297",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

export default app;

const db = getFirestore(app);

export { db };
