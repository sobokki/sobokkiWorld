"use client";
import { useEffect, useState } from "react";
import styles from "@/app/(pages)/page.module.scss";
export default function HomeTitle() {
  const [showFrontendDeveloper, setShowFrontendDeveloper] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setShowFrontendDeveloper((prev) => !prev);
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      {showFrontendDeveloper ? (
        <span
          className={`${styles.position} ${styles.animated} ${styles.fadeIn}`}
        >
          Frontend developer
        </span>
      ) : (
        <span
          className={`${styles.position} ${styles.animated} ${styles.fadeOut}`}
        >
          Positive colleague
        </span>
      )}
    </>
  );
}
