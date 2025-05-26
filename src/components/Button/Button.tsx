// src/components/Button/Button.tsx
"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { useTransitionRouter } from "next-view-transitions";
import { motion } from "framer-motion";
import styles from "./Button.module.css";
import ChevronDown from "../../../public/icons/chevronDown.svg";

interface Props {
  href: string;
  text?: string;
  btnType: string;
  target?: string;
  onClick?: () => void;
  disabled?: boolean;
  children?: ReactNode;
  marquee?: boolean; // ← new: show marquee animation
  showChevron?: boolean; // ← new: show chevron icon
}

export default function Button({
  href = "",
  text,
  btnType,
  target = "",
  onClick,
  disabled,
  children,
  marquee = false,
  showChevron = false,
}: Props) {
  const router = useTransitionRouter();
  const content = text || children;

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
    if (target === "_blank") return;
    e.preventDefault();
    onClick?.();
    if (href) router.push(href, { onTransitionReady: slideInOut });
  };

  return (
    <motion.button className={styles.container} disabled={disabled}>
      <Link
        href={href}
        className={`${styles.btn} ${styles[btnType]}`}
        target={target}
        onClick={handleClick}
      >
        <span className={styles.label}>{content}</span>

        {marquee && (
          <>
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
          </>
        )}

        {showChevron && (
          <div className={styles.iconContainer}>
            <ChevronDown className={styles.chevron} />
          </div>
        )}
      </Link>
    </motion.button>
  );
}
