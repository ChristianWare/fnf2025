"use client";

import styles from "./Modal.module.css";
import { useEffect } from "react";
import Close from "../../../public/icons/close.svg";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children }: Props) {
  useEffect(() => {
    /* -- ESC closes -------------------------------------------------------- */
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onEsc);

    /* -- Lock scrolling & block layout shift ------------------------------ */
    if (isOpen) {
      const scrollY = window.scrollY || window.pageYOffset;

      /* scrollbar width = viewport - document width */
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;

      Object.assign(document.body.style, {
        position: "fixed",
        top: `-${scrollY}px`,
        left: "0",
        right: "0",
        width: "100%",
        overflow: "hidden",
        paddingRight: `${scrollbarWidth}px`, // compensate for missing scrollbar
      });
    }

    return () => {
      window.removeEventListener("keydown", onEsc);

      /* restore scroll & body styles if we had locked them */
      const top = document.body.style.top;
      if (top) {
        const y = -parseInt(top, 10) || 0;
        document.body.style.cssText = "";
        window.scrollTo(0, y);
      }
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modalContent}>
        <button onClick={onClose} className={styles.button}>
          <Close width={30} height={30} className={styles.icon} />
        </button>
        <div className={styles.children}>{children}</div>
      </div>
    </div>
  );
}
