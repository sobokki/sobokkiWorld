"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "@/app/(pages)/about/about.module.scss";
import styledComponentImg from "../../../../public/styledComponentPng.png";
import scssImg from "../../../../public/scssPng.png";
import tailwindImg from "../../../../public/tailwindPng.png";
import upIcon from "../../../../public/upIcon.svg";
import downIcon from "../../../../public/downIcon.svg";

export default function StyleContent() {
  const [isStylingUp, setIsStylingUp] = useState<boolean>(true);
  return (
    <>
      <Image
        src={isStylingUp ? downIcon : upIcon}
        alt={isStylingUp ? "down" : "up"}
        className={styles.toggleIcon}
        onClick={() => setIsStylingUp(!isStylingUp)}
        width={12}
        height={12}
      />
      {isStylingUp && (
        <div className={styles.image}>
          <Image
            className={styles.boxImg}
            src={styledComponentImg}
            alt="styledComponent이미지"
          />
          <Image className={styles.boxImg} src={scssImg} alt="scss이미지" />
          <Image
            className={styles.boxImg}
            src={tailwindImg}
            alt="tailwind이미지"
          />
        </div>
      )}
    </>
  );
}
