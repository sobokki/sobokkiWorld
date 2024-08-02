"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "@/app/(pages)/about/about.module.scss";
import githubImg from "../../../../public/gitHubPng.png";
import upIcon from "../../../../public/upIcon.svg";
import downIcon from "../../../../public/downIcon.svg";
export default function CollaboContent() {
  const [isCollabUp, setIsCollabUp] = useState<boolean>(true);
  return (
    <>
      <Image
        src={isCollabUp ? downIcon : upIcon}
        alt={isCollabUp ? "down" : "up"}
        className={styles.toggleIcon}
        onClick={() => setIsCollabUp(!isCollabUp)}
      />
      {isCollabUp && (
        <div className={styles.image}>
          <Image className={styles.boxImg} src={githubImg} alt="github이미지" />
        </div>
      )}
    </>
  );
}
