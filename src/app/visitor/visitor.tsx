'use client'
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../visitor/visitor.module.scss";
import pencilIcon from "../../../public/pencil.svg";
import Pagenation from "../components/pagenation/pagenation";
import Card from "../components/card/card";
import LetterModal from "../components/modal/letterModal/letterModal";
import fetchLetters from "../data/fetchLetter";
import { useSearchParams,useRouter } from "next/navigation";


interface Letter {
  id: string;
  nickname: string;
  title: string;
  reason: string;
  createdAt: Date;
}


export default function Visitor() {
  const [letters, setLetters] = useState<Letter[]>([]);
  const [selectedLetter, setSelectedLetter] = useState<Letter | null>(null);
  const [totalItems, setTotalItems] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const page = searchParams.get("page");
  const [currentPage, setCurrentPage] = useState<number>(page? parseInt(page):1);//
  const itemsPerPage = 5;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // 페이지 이동 시 스크롤 맨 위로 초기화 시키기

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchLetters();
        //날짜 순으로 정렬
         data.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
         setLetters(data);
         setTotalItems(data.length);
      } catch (error) {
        console.error("Failed to fetch letters:", error);
      }
    };

    fetchData();
  }, []);

useEffect(()=>{
  if(page){
    setCurrentPage(parseInt(page));
  }
},[page]);

  const handleCardClick = (letter: Letter) => {
    setSelectedLetter(letter);
    setIsModalOpen(true);
  };
  const handlePageChange =useCallback((page:number)=>{
    setCurrentPage(page);
    router.push(`?page=${page}`);
  },[router]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentLetters = letters.slice(startIndex, startIndex + itemsPerPage);

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
          <Card key={letter.id} title={letter.title} nickname={letter.nickname} onClick={() => handleCardClick(letter)} />
        ))}
      </div>

      {isModalOpen && selectedLetter && (
        <LetterModal
          key={selectedLetter.id}
          createdAt={selectedLetter.createdAt}
          nickname={selectedLetter.nickname}
          title={selectedLetter.title}
          reason={selectedLetter.reason}
          closeClick={() => setIsModalOpen(false)}
        />
      )}
      <Pagenation
        totalItems={totalItems}
         itemCountPerPage={itemsPerPage}
        pageCount={5}
        onPageChange={()=>handlePageChange(currentPage)}
      />
    </main>
  );
}