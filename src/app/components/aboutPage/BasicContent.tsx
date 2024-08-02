"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "@/app/(pages)/about/about.module.scss";
import htmlImg from "../../../../public/htmlPng.png";
import cssImg from "../../../../public/cssPng.png";
import javaScriptImg from "../../../../public/javascroptPng.png";
import upIcon from "../../../../public/upIcon.svg";
import downIcon from "../../../../public/downIcon.svg";

export default function BasicContent() {
  const [isBasicUp, setIsBasicUp] = useState<boolean>(true);

  return (
    <>
      <Image
        src={isBasicUp ? downIcon : upIcon}
        alt={isBasicUp ? "down" : "up"}
        className={styles.toggleIcon}
        onClick={() => setIsBasicUp(!isBasicUp)}
      />
      {isBasicUp && (
        <div className={styles.image}>
          <Image className={styles.boxImg} src={htmlImg} alt="html이미지" />
          <Image className={styles.boxImg} src={cssImg} alt="css이미지" />
          <Image
            className={styles.boxImg}
            src={javaScriptImg}
            alt="javaScript이미지"
          />
        </div>
      )}
    </>
  );
}
