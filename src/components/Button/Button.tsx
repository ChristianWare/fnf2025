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
  const duration = 1500;
  const easing = "cubic-bezier(0.87, 0, 0.13, 1)";

  /* 1️⃣  Outgoing view ‑‑ fade + drift up‑right  */
  document.documentElement.animate(
    [
      { opacity: 1, transform: "translate(0, 0)" },
      { opacity: 0.2, transform: "translate(35%, -35%)" },
    ],
    {
      duration,
      easing,
      fill: "forwards",
      pseudoElement: "::view-transition-old(root)",
    }
  );

  /* 2️⃣  Incoming view ‑‑ start down‑left, glide to centre while fading in */
  document.documentElement.animate(
    [
      { opacity: 0, transform: "translate(-35%, 35%)" },
      { opacity: 1, transform: "translate(0, 0)" },
    ],
    {
      duration,
      easing,
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
