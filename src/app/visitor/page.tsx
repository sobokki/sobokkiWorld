'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/app/visitor/visitor.module.scss";
import pencilIcon from "../../../public/pencil.svg";
import Pagenation from "../components/pagenation/pagenation";
import Card from "../components/card/card";
import LetterModal from "../components/modal/letterModal/letterModal";
import fetchLetters from "../data/fetchLetter";
import { useSearchParams } from "next/navigation";

interface Letter {
  id:string;
  nickname: string;
  title: string;
  reason: string;
   createdAt: string; // 작성일자 추가
}

export default function Visitor() {
  const [letters, setLetters] = useState<Letter[]>([]);
   const [selectedLetter, setSelectedLetter] = useState<Letter | null>(null);
  const [totalItems,setTotalItems]=useState(0);
  const [isModalOpen, setIsModalOpen]=useState<boolean>(false)
  const searchParams = useSearchParams();
  const page = searchParams.get("page");
  const currentPage = page && parseInt(page) > 0 ? parseInt(page) : 1;
  const itemsPerPage = 5;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentLetters = letters.slice(startIndex, startIndex + itemsPerPage);
  
  useEffect(()=>{
    window.scrollTo(0,0);
   
  },[page])//페이지 이동시 스크롤 맨 위로 초기화 시키기 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchLetters();
        setLetters(data);
        setTotalItems(data.length);
         
      } catch (error) {
        console.error("Failed to fetch letters:", error);
      }
    };

    fetchData();
  }, []);

const handleCardClick = (letter: Letter) => {
    setSelectedLetter(letter);
    setIsModalOpen(true);

};


  return (
    <main className={styles.visitorWrapper}>
      <div className={styles.banner}>
        <span className={styles.intro}>전소은은 어떤 사람인가요?</span>
        <Link href="/writing" className={styles.pencilIcon}>
          <Image src={pencilIcon} alt="연필 아이콘" className={styles.pencilImg} />
        </Link>
      </div>
      <div>
        {currentLetters.map((letter) => (
          <Card key={letter.id} title={letter.title} nickname={letter.nickname} onClick={()=>handleCardClick(letter)}/>
        
        ))}
      </div>
    
       {isModalOpen && selectedLetter && (
        <LetterModal
        key={selectedLetter.id}
        createdAt={selectedLetter.createdAt}
          nickname={selectedLetter.nickname}
          title={selectedLetter.title}
          reason={selectedLetter.reason}
          closeClick={()=>setIsModalOpen(false)}
          
        />
      )}
      <Pagenation
       totalItems={totalItems}
       currentPage={page&& parseInt(page)>0 ? parseInt(page):1}
       pageCount={5}
       itemCountPerPage={itemsPerPage}
       />

    </main>
  );
}
