import { collection, getDocs, Timestamp } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { HookFormTypes } from "../(pages)/writing/page";

// 비동기 데이터 가져오기 함수
export default async function fetchLetters(): Promise<HookFormTypes[]> {
  try {
    const lettersCollection = collection(db, "letters");
    const lettersSnapshot = await getDocs(lettersCollection);
    const letterList = lettersSnapshot.docs.map((doc) => {
      const data = doc.data();
      const createdAtString = data.createdAt
        ? data.createdAt instanceof Timestamp
          ? data.createdAt.toDate().toISOString()
          : new Date(data.createdAt).toISOString()
        : new Date().toISOString();
      const createdAt = new Date(createdAtString);
      return {
        id: doc.id,
        createdAt: createdAt.toLocaleDateString(),
        ...data,
      };
    }) as HookFormTypes[];
    return letterList;
  } catch (error) {
    console.error("Failed to fetch letters:", error);
    throw error;
  }
}
