"use client";

import styles from "./Hero.module.css";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import LayoutWrapper from "../LayoutWrapper";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);



export default function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const copyRef = useRef<HTMLParagraphElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);


  useGSAP(() => {
    if (!headingRef.current) return;

    const heroText = new SplitType(headingRef.current, { types: "words" });

    gsap.set(headingRef.current, { visibility: "visible" });

    gsap.set(heroText.words, {
      y: 400,
      // opacity: 0,
    });

    gsap.to(heroText.words, {
      y: 0,
      opacity: 1,
      duration: 2,
      stagger: 0.075,
      ease: "power4.out",
      delay: 0.25,
    });
  });

  useGSAP(
    () => {
      if (!copyRef.current) return;

      gsap.set(copyRef.current, { visibility: "hidden" });

      const text = new SplitType(copyRef.current, {
        types: "lines",
        tagName: "div",
        lineClass: styles.line,
      });

      gsap.set(copyRef.current, { visibility: "visible" });

      gsap.set(text.lines, {
        y: 400,
        willChange: "transform, opacity",
      });

      gsap.to(text.lines, {
        y: 0,
        opacity: 1,
        duration: 2,
        stagger: 0.075,
        ease: "power4.out",
        delay: 0.25,
      });

      return () => text.revert();
    },
    { scope: copyRef }
  );

   useGSAP(() => {
     if (!overlayRef.current) return;

     gsap.fromTo(
       overlayRef.current,
       { opacity: 0 },
       {
         opacity: 0.7,
         scrollTrigger: {
           trigger: overlayRef.current, 
           start: "top top", 
           end: "bottom top", 
           scrub: true,
         },
       }
     );
   });


  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.overlay} ref={overlayRef}></div>

        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.headingClip}>
              <h1 ref={headingRef} className={styles.heading}>
                INNOVATING <br />
                {/* Ecommerce <br /> */}
                Websites <br />
              </h1>
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.copyContainer}>
              <p className={styles.copy} ref={copyRef}>
                Since 2022, we&apos;ve been crafting digital experiences that
                maetter.{" "}
              </p>
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
