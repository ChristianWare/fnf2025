"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from "./Button.module.css";
import { ReactNode } from "react";
import Link from "next/link";
import { useTransitionRouter } from "next-view-transitions";

interface Props {
  href: string;
  text?: string;
  btnType: string;
  target?: string;
  onClick?: () => void; // This is correctly typed
  disabled?: any;
  children?: ReactNode;
}

export default function Button({
  href = "",
  text,
  btnType,
  target = "",
  onClick,
  disabled,
  children,
}: Props) {
  const router = useTransitionRouter();

  /* ---------------- view‑transition helper ---------------------- */
  function slideInOut() {
    document.documentElement.animate(
      [
        { opacity: 1, transform: "translateY(0)" },
        { opacity: 0.2, transform: "translateY(-35%)" },
      ],
      {
        duration: 1500,
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-old(root)",
      }
    );

    document.documentElement.animate(
      [
        { clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" },
        { clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)" },
      ],
      {
        duration: 1500,
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  }

  const handleClick = (e: React.MouseEvent) => {
    // If target is set to open in a new window, don't use the transition
    if (target === "_blank") return;

    // Prevent default link behavior
    e.preventDefault();

    // Call the custom onClick if provided
    if (onClick) {
      onClick();
    }

    // Use the transition router if href exists
    if (href) {
      router.push(href, { onTransitionReady: slideInOut });
    }
  };

  return (
    <button className={styles.container} disabled={disabled}>
      <Link
        href={href}
        className={`${styles.btn} ${styles[btnType]}`}
        target={target}
        onClick={handleClick}
      >
        <span className={styles.dot1}></span>
        <span className={styles.dot2}></span>
        <span className={styles.dot3}></span>
        <span className={styles.dot4}></span>
        {text || children}
      </Link>
    </button>
  );
}
