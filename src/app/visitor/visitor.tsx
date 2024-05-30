'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../visitor/visitor.module.scss";
import pencilIcon from "../../../public/pencil.svg";
import Pagenation from "../components/pagenation/pagenation";
import Card from "../components/card/card";
import LetterModal from "../components/modal/letterModal/letterModal";
import fetchLetters from "../data/fetchLetter";

interface Letter {
  id: string;
  nickname: string;
  title: string;
  reason: string;
  createdAt: string; // 작성일자 추가
}

export default function Visitor() {
  const [letters, setLetters] = useState<Letter[]>([]);
  const [selectedLetter, setSelectedLetter] = useState<Letter | null>(null);
  const [totalItems, setTotalItems] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const itemsPerPage = 5;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // 페이지 이동 시 스크롤 맨 위로 초기화 시키기

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

  const currentPage = 1; // 임시 값, 실제 값은 Pagenation 컴포넌트에서 처리됨
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
      />
    </main>
  );
}