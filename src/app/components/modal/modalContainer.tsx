"use client";
import { ReactNode, useCallback, useEffect, useRef } from "react";
import styles from "@/app/components/modal/modalContainer.module.scss";

interface ModalContainerProps {
  children: ReactNode;
  className?: string;
  closeClick: () => void;
}

export default function ModalContainer({
  children,
  className,
  closeClick,
}: ModalContainerProps) {
  const modalOverlayRef = useRef<HTMLDivElement>(null);

  const handleClickOutsied = useCallback(
    (e: MouseEvent) => {
      if (modalOverlayRef.current && modalOverlayRef.current === e.target) {
        closeClick();
      }
    },
    [closeClick]
  );

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;

    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    document.addEventListener("mousedown", handleClickOutsied);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
      document.removeEventListener("mousedown", handleClickOutsied);
    };
  }, [handleClickOutsied]);
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
