"use client";

import LayoutWrapper from "../LayoutWrapper";
import styles from "./Solution.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";

const data = [
  {
    id: 1,
    title: "Beautiful & Strategic Design",
    desc: "We combine strategic thinking with beautiful design to build online stores that are not just functional, but exceptional at telling your brand story and converting visitors.",
  },
  {
    id: 2,
    title: "Technical Excellence",
    desc: "We transform outdated platforms into modern, responsive storefronts and simplify complex checkout processes to dramatically improve user experience across all devices.",
  },
  {
    id: 3,
    title: "Tailored Approach",
    desc: "Whether you're launching a new store or optimizing an existing one, we address your specific pain points and turn them into competitive advantages that drive real business growth.",
  },
];

export default function Solution() {
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
    "That's why we create custom e-commerce experiences that solve these exact challenges:";

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
          color: "#FF8F00",
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
    <div className={styles.container} ref={triggerRef}>
      <LayoutWrapper>
        <div className={styles.top}>
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
        <div className={styles.bottom}></div>
      </LayoutWrapper>
    </div>
  );
}
