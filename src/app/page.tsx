'use client'
import Image from "next/image";
import Link from 'next/link';
import underline from "../../public/underline.svg"
import styles from "@/app/page.module.scss"

export default function Home() {

  return (
   <div className={styles.container}>

 <div className={styles.texts}>
   <h1 className={styles.title}>JEON SO EUN</h1>
   <Image src={underline} className="underline" alt="밑줄 아이콘"/>
   <span className={styles.position}>Frontend developer</span>
   <Link href="/project" className={styles.linkText}>
   <button>Go Project</button>
   </Link>
</div>
   </div>
  );
}
