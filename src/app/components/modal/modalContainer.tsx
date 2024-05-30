'use client'
import { ReactNode, useEffect, useRef } from "react";
import styles from "@/app/components/modal/modalContainer.module.scss";

interface ModalContainerProps {
  children: ReactNode;
  className?: string;
  closeClick:()=>void;
}

export default function ModalContainer({
  children,
  className,
  closeClick,
}: ModalContainerProps) {

const modalOverlayRef = useRef<HTMLDivElement>(null);

const handleClickOutsied =(e:MouseEvent)=>{
  if(modalOverlayRef.current && modalOverlayRef.current === e.target){
    closeClick();
  }
}

useEffect(()=>{
  document.addEventListener("mousedown",handleClickOutsied);
  return()=>{
    document.removeEventListener("mousedown", handleClickOutsied);
  }
},[handleClickOutsied]);
  return (
    <div ref={modalOverlayRef} className={styles["modal-overlay"]}>
      <div className={`${styles["modal-container"]} ${className}`}>
        <button className={styles["modal-close"]} onClick={closeClick}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}