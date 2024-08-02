"use client";
import { useRouter } from "next/navigation";
import { MdError } from "react-icons/md";
import styles from "./NotFound.module.scss";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className={styles.notFoundWrapper}>
      <h1 className={styles.title}>404</h1>
      <MdError className={styles.errorIcon} />
      <p className={styles.ment}>이 페이지는 존재하지 않는 페이지 입니다.</p>
      <div className={styles.buttons}>
        <button className={styles.backBtn} onClick={() => router.back()}>
          이전으로
        </button>
        <button className={styles.homeBtn} onClick={() => router.push("/")}>
          홈으로
        </button>
      </div>
    </div>
  );
}
