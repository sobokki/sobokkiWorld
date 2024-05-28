'use client'
import { collection, getDocs, Timestamp } from 'firebase/firestore';
import { db } from "../firebaseConfig";
import { HookFormTypes } from "../writing/page";

// 비동기 데이터 가져오기 함수
export default async function fetchLetters(): Promise<HookFormTypes[]> {
  const lettersCollection = collection(db, 'letters');
  const lettersSnapshot = await getDocs(lettersCollection);
  const letterList = lettersSnapshot.docs.map(doc => {
    const data = doc.data();
    const createdAt =  data.createdAt ? (data.createdAt instanceof Timestamp ? data.createdAt.toDate().toISOString() : new Date(data.createdAt).toISOString()) : new Date().toISOString();
  const formattedCreatedAt = createdAt.toString().slice(0, 19).replace('T', ' ').replace('-', '/').replace('-', '/').replace(' ', ' ');
    return {
      id: doc.id,
      createdAt:formattedCreatedAt,
      ...data
    };
  }) as HookFormTypes[];
  return letterList;
}