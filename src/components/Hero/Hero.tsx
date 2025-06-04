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
    /* ─────── overlay fade (unchanged) ─────── */
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

    /* ─────── heading flip-up animation ─────── */
    const animateHeading = (el: HTMLElement) => {
      /* make sure the element itself is visible */
      gsap.set(el, { visibility: "visible" });

      const split = new SplitType(el, {
        types: "lines",
        lineClass: styles.line,
      });

      const tl = gsap.timeline({ defaults: { ease: "back.out(1.4)" } });

      gsap.set(split.lines, {
        yPercent: 200,
        rotationX: -200,
        skewY: 7,
        transformOrigin: "50% 100%",
        opacity: 0,
      });

      tl.to(split.lines, {
        yPercent: 0,
        rotationX: 0,
        skewY: 0,
        opacity: 1,
        duration: 1,
        stagger: { each: 0.45 },
      });

      return () => {
        tl.kill();
        split.revert();
      };
    };

    const cleanup = refs.heading.current
      ? animateHeading(refs.heading.current)
      : () => {};

    return cleanup;
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
