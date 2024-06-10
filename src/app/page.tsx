'use client'
import Image from "next/image";
import Link from 'next/link';
import underline from "../../public/underline.svg"
import styles from "@/app/page.module.scss"
import { useEffect, useState } from "react";

export default function Home() {
  const [showFrontendDeveloper, setShowFrontendDeveloper] = useState(true);

  useEffect(()=>{
    const intervalId=setInterval(()=>{
      setShowFrontendDeveloper((prev) => !prev);
    },5000);
    return()=> clearInterval(intervalId);
  },[]);
 
  return (
   <div className={styles.container}>

 <div className={styles.texts}>
   <h1 className={styles.title}>JEON SO EUN</h1>
   <Image src={underline} className="underline" alt="밑줄 아이콘"/>
       {showFrontendDeveloper ? (
          <span className={`${styles.position} ${styles.animated} ${styles.fadeIn}`}>
            Frontend developer
          </span>
        ) : (
          <span className={`${styles.position} ${styles.animated} ${styles.fadeOut}`}>
            Your great coworker
          </span>
        )}
   <Link href="/project" className={styles.linkText}>
   <button>Go Project</button>
   </Link>
</div>
   </div>
  );
}
