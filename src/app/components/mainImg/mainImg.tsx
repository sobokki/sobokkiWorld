'use client';
import { usePathname } from 'next/navigation';
import Image from "next/image";
import photo from "../../../../public/mainImg.svg"
import styles from "./mainImg.module.scss"


export default function MainImg(){
  const path = usePathname();
  const showImageOnPaths = ["/","/about","/project","/visitor"];
  return(
    <>
     {showImageOnPaths.includes(path)&&
    <Image src={photo}  className={styles.mainImg} alt="메인 이미지"/>
     }
    </>
  )
}