"use client";

import styles from "./Explain.module.css";
import { useEffect, useRef } from "react";
import LayoutWrapper from "../LayoutWrapper";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
// import SectionHeading from "../SectionHeading/SectionHeading";

export default function Explain() {
  const [lettersRef, setLettersRef] = useArrayRef();
  const triggerRef = useRef(null);

  function useArrayRef(): [
    React.MutableRefObject<HTMLSpanElement[]>,
    (ref: HTMLSpanElement) => void
  ] {
    const lettersRef = useRef<HTMLSpanElement[]>([]);
    lettersRef.current = [];
    return [lettersRef, (ref) => ref && lettersRef.current.push(ref)];
  }

  gsap.registerPlugin(ScrollTrigger);

  const text =
    "We craft custom, high-converting online stores for businesses of all sizes.";

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
          color: "#ff4d00",
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
    <section className={styles.container} ref={triggerRef}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <h2 className={styles.heading}>
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
          <div className={styles.right}></div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
