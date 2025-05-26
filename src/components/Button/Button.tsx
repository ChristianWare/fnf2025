// src/components/Button/Button.tsx
"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { useTransitionRouter } from "next-view-transitions";
import { motion } from "framer-motion";
import styles from "./Button.module.css";

interface Props {
  href: string;
  text?: string;
  btnType: string;
  target?: string;
  onClick?: () => void;
  disabled?: boolean;
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

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // if they want a new tab, just let the default anchor work
    if (target === "_blank") return;

    e.preventDefault();
    if (onClick) onClick();
    if (href) {
      router.push(href, { onTransitionReady: slideInOut });
    }
  };

  const content = text || children;

  return (
    <motion.button
      className={styles.container}
      disabled={disabled}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        href={href}
        className={`${styles.btn} ${styles[btnType]}`}
        target={target}
        onClick={handleClick}
      >
        {/* 👻 keeps the button’s natural size */}
        <span className={styles.label}>{content}</span>

        {/* marquee clones */}
        <motion.span
          className={styles.marqueeSpan}
          initial={{ x: "0%" }}
          animate={{ x: "calc(-100% - 6px)" }}
          transition={{
            ease: "linear",
            duration: 5,
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          {content} •
        </motion.span>

        <motion.span
          className={styles.marqueeSpan}
          initial={{ x: "calc(-100% - 6px)" }}
          animate={{ x: "calc(-200% - 12px)" }}
          transition={{
            ease: "linear",
            duration: 5,
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          {content} •
        </motion.span>

        <motion.span
          className={styles.marqueeSpan}
          initial={{ x: "calc(100% + 6px)" }}
          animate={{ x: "0%" }}
          transition={{
            ease: "linear",
            duration: 5,
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          {content} •
        </motion.span>

        <motion.span
          className={styles.marqueeSpan}
          initial={{ x: "calc(200% + 12px)" }}
          animate={{ x: "calc(100% + 6px)" }}
          transition={{
            ease: "linear",
            duration: 5,
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          {content} •
        </motion.span>
      </Link>
    </motion.button>
  );
}
