/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from "react";
import styles from "./FalseButton.module.css";

interface Props {
  text?: string;
  onClick?: () => void;
  disabled?: any;
  children?: ReactNode;
  btnType: string;
}

export default function FalseButton({
  text,
  onClick,
  disabled,
  children,
  btnType,
}: Props) {
  return (
    <div>
      <button
        className={`${styles.container} ${styles.btn} ${styles[btnType]}`}
        onClick={onClick}
        disabled={disabled}
      >
        <span className={styles.dot1}></span>
        <span className={styles.dot2}></span>
        <span className={styles.dot3}></span>
        <span className={styles.dot4}></span>
        {text || children}
      </button>
    </div>
  );
}
