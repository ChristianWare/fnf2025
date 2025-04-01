/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from "./Button.module.css";
import { FC, ReactNode } from "react";
import Link from "next/link";

interface Props {
  href: string;
  text?: string;
  btnType: string;
  target?: string;
  onClick?: () => void;
  disabled?: any;
  children?: ReactNode;
}

const Button: FC<Props> = ({
  href = "",
  text,
  btnType,
  target = "",
  onClick,
  disabled,
  children,
}) => {
  return (
    <button className={styles.container} onClick={onClick} disabled={disabled}>
      <Link
        href={href}
        className={`${styles.btn} ${styles[btnType]}`}
        target={target}
      >
        <span className={styles.dot1}></span>
        <span className={styles.dot2}></span>
        <span className={styles.dot3}></span>
        <span className={styles.dot4}></span>
        {text || children}
      </Link>
    </button>
  );
};
export default Button;
