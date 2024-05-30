'use client'
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import styles from "./pagenation.module.scss";
import Link from "next/link";

interface PagenationProps {
  totalItems: number; // 데이터의 총 개수 
  itemCountPerPage: number; // 페이지 당 보여줄 데이터의 수 
  pageCount: number; // 보여줄 페이지 개수 
  // currentPage: number; // 현재 페이지 
}

export default function Pagenation({ totalItems, itemCountPerPage, pageCount}: PagenationProps) {
  const searchParams =useSearchParams();
  const page =searchParams.get("page");
  const currentPage = page && parseInt(page) > 0? parseInt(page) :1;
  const totalPages = Math.ceil(totalItems / itemCountPerPage); // 총 페이지 개수 
  const [start, setStart] = useState(1); // 시작 페이지 
  const noPrev = start === 1; // 이전 페이지가 없는 경우 
  const noNext = start + pageCount - 1 >= totalPages; // 다음 페이지가 없는 경우 

  useEffect(() => {
    if (currentPage >= start + pageCount) {
      setStart(prev => prev + pageCount);
    } else if (currentPage < start) {
      setStart(prev => prev - pageCount);
    }
  }, [currentPage, pageCount, start]);

  return (
    <div className={styles.wrapper}>
    <ul>
      <li className={`${styles.move} ${noPrev ? styles.invisible : ""}`}>
        <Link href={`?page=${start - 1}`}>이전</Link>
      </li>
      {[...Array(pageCount)].map((_, i) => (
        start + i <= totalPages && (
          <li key={i}>
            <Link 
              className={`${styles.page}${currentPage === start + i ? styles.active : ""}`}
              href={`?page=${start + i}`}
            >
              {start + i}
            </Link>
          </li>
        )
      ))}
      <li className={`${styles.move} ${noNext ? styles.invisible : ""}`}>
        <Link href={`?page=${start + pageCount}`}>다음</Link>
      </li>
    </ul>
    </div>
  );
}
