"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "@/app/(pages)/about/about.module.scss";
import upIcon from "../../../../public/upIcon.svg";
import downIcon from "../../../../public/downIcon.svg";
import reactImg from "../../../../public/reactPng.png";
import nextImg from "../../../../public/nextjsPng.png";
import reacthookFormImg from "../../../../public/reactHookFormPng.png";
export default function FrameContent() {
  const [isFrameworksUp, setIsFrameworksUp] = useState<boolean>(true);
  return (
    <>
      <Image
        src={isFrameworksUp ? downIcon : upIcon}
        alt={isFrameworksUp ? "down" : "up"}
        className={styles.toggleIcon}
        onClick={() => setIsFrameworksUp(!isFrameworksUp)}
      />
      {isFrameworksUp && (
        <div className={styles.image}>
          <Image className={styles.boxImg} src={reactImg} alt="react이미지" />
          <Image className={styles.boxImg} src={nextImg} alt="next이미지" />
          <Image
            className={styles.boxImg}
            src={reacthookFormImg}
            alt="reacthookform이미지"
          />
        </div>
      )}
    </>
  );
}
