"use client";

import styles from "./Hero.module.css";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import LayoutWrapper from "../LayoutWrapper";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Button from "../Button/Button";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const refs = {
    heading: useRef<HTMLHeadingElement>(null),
    overlay: useRef<HTMLDivElement>(null),
  };

  useGSAP(() => {
    /* ───────── overlay fade (unchanged) ───────── */
    if (refs.overlay.current) {
      gsap.fromTo(
        refs.overlay.current,
        { opacity: 0 },
        {
          opacity: 0.7,
          scrollTrigger: {
            trigger: refs.overlay.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }

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

    const cleanups = [animateText(refs.heading.current, "words")];

    return () => cleanups.forEach((c) => c && c());
  });

  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.overlay} ref={refs.overlay}></div>
        <div className={styles.content}>
          <div className={styles.left}>
            <p className={styles.copy}>
              Fonts & Footers builds lightning-fast, revenue-driven online
              stores for small and medium-sized brands. Every line of code is
              written with one purpose: turning casual browsers into loyal
              buyers.
            </p>
          </div>
          <div className={styles.right}>
            <div className={styles.headingClip}>
              <h1 ref={refs.heading} className={styles.heading}>
                We Build <br />
                Blazing fast <br />
                Online Stores
              </h1>
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
