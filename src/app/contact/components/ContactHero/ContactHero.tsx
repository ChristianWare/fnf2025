"use client";

import styles from "./ContactHero.module.css";
import LayoutWrapper from "@/components/LayoutWrapper";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import ContactForm from "@/components/ContactForm/ContactForm";

export default function ContactHero() {
  const [lettersRef, setLettersRef] = useArrayRef();

  const triggerRef = useRef(null);

  function useArrayRef(): [
    React.MutableRefObject<HTMLSpanElement[]>,
    (ref: HTMLSpanElement) => void,
  ] {
    const lettersRef = useRef<HTMLSpanElement[]>([]);
    lettersRef.current = [];
    return [lettersRef, (ref) => ref && lettersRef.current.push(ref)];
  }

  gsap.registerPlugin(ScrollTrigger);

  const text = "Ready to elevate your e-commerce experience?";

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        scrub: 0.5,
        start: "top center",
        end: "bottom center",
        markers: false,
      },
    });

    lettersRef.current.forEach((letter, index) => {
      tl.to(
        letter,
        {
          color: "#1f1f1f",
          duration: 0.2,
        },
        index * 0.015
      );
    });

    return () => {
      tl.scrollTrigger?.kill();
    };
  }, [lettersRef]);

  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.top} ref={triggerRef}>
          <div className={styles.rightTop}>
            <h2 className={styles.headingii}>
              {text.split("").map((letter, index) => (
                <span
                  key={index}
                  className={styles.revealText}
                  ref={setLettersRef}
                >
                  {letter}
                </span>
              ))}
            </h2>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.subHeadingCopyContainer}>
              <span className={styles.subHeading}>General</span>
              <p className={styles.copy}>hello@fontsandfooters.com</p>
              <p className={styles.copy}>623-634-2777</p>
            </div>
            <div className={styles.subHeadingCopyContainer}>
              <span className={styles.subHeading}>New Business</span>
              <p className={styles.copy}>new@fontsandfooters.com</p>
              <p className={styles.copy}>623-634-2777</p>
            </div>
            <div className={styles.subHeadingCopyContainer}>
              <span className={styles.subHeading}>Socials</span>
              <p className={styles.copy}>Instagram.com/fontsandfooters</p>
              <p className={styles.copy}>Facebook/fontsandfooters</p>
              <p className={styles.copy}>Behance/fontsandfooters</p>
              <p className={styles.copy}>LinkedIn/fontsandfooters</p>
            </div>
          </div>
          <div className={styles.right}>
            <ContactForm />
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
