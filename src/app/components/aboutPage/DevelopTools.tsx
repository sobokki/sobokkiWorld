"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "@/app/(pages)/about/about.module.scss";
import upIcon from "../../../../public/upIcon.svg";
import downIcon from "../../../../public/downIcon.svg";
import viteImg from "../../../../public/vitePng.png";
import typescriptImg from "../../../../public/typescriptPng.png";
export default function DevelopTools() {
  const [isToolsUp, setIsToolsUp] = useState<boolean>(true);
  return (
    <>
      <Image
        src={isToolsUp ? downIcon : upIcon}
        alt={isToolsUp ? "down" : "up"}
        className={styles.toggleIcon}
        onClick={() => setIsToolsUp(!isToolsUp)}
      />
      {isToolsUp && (
        <div className={styles.image}>
          <Image className={styles.boxImg} src={viteImg} alt="vite이미지" />
          <Image
            className={styles.boxImg}
            src={typescriptImg}
            alt="typescript이미지"
          />
        </div>
      )}
    </>
  );
}
