// firestoreService.js
import { db } from "./firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { HookFormTypes } from "./components/writePage/WritingForm";
export const addLetter = async (data: HookFormTypes) => {
  try {
    const docRef = await addDoc(collection(db, "letters"), data);
    console.log("Document written with ID: ", docRef.id);
    return docRef.id;
  } catch (e) {
    console.error("Error adding document: ", e);
    throw e;
  }
};
