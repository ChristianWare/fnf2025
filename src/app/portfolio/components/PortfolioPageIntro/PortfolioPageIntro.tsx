"use client";

import styles from "./PortfolioPageIntro.module.css";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitType from "split-type";
import LayoutWrapper from "@/components/LayoutWrapper";

export default function PortfolioPageIntro() {
  const refs = {
    heading: useRef<HTMLHeadingElement>(null),
    copy: useRef<HTMLParagraphElement>(null),
  };

  useGSAP(() => {
    const animateText = (el: HTMLElement | null, type: "words" | "lines") => {
      if (!el) return;
      gsap.set(el, { visibility: "visible" });

      const split = new SplitType(el, {
        types: type,
        lineClass: styles.line, // style below
      });

      const targets = type === "words" ? split.words : split.lines;

      // ▶ start bottom‑left & transparent
      gsap.set(targets, { y: 200, x: -200, opacity: 0 });

      // ▶ travel to natural spot, fade in
      gsap.to(targets, {
        y: 0,
        x: 0,
        opacity: 1,
        duration: 2.5,
        stagger: 0.075,
        ease: "power4.out",
        delay: 0.25,
      });

      return () => split.revert();
    };

    // run on mount
    const cleanups = [
      animateText(refs.heading.current, "words"),
      animateText(refs.copy.current, "lines"),
    ];

    // tidy on unmount
    return () => cleanups.forEach((c) => c && c());
  });

  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <h1 ref={refs.heading} className={styles.heading}>
              Our work speaks for itself
            </h1>
          </div>
          <div className={styles.right}>
            <p ref={refs.copy} className={styles.copy}>
              Explore our portfolio of successful e-commerce projects across
              various industries and business models.{" "}
            </p>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
