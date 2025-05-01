"use client";

import { useLayoutEffect, useRef } from "react";
import LayoutWrapper from "../LayoutWrapper";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import styles from "./Solution.module.css";

import SlowLoading from "../../../public/icons/badLoading.svg";
import BadMobile from "../../../public/icons/badMobile.svg";
import BadCheckout from "../../../public/icons/badCheckout.svg";
import BadVisibility from "../../../public/icons/badSearch.svg";

/* helper to gather many span refs */
function useArrayRef(): [
  React.MutableRefObject<HTMLSpanElement[]>,
  (el: HTMLSpanElement | null) => void,
] {
  const arr = useRef<HTMLSpanElement[]>([]);
  arr.current = [];
  return [arr, (el) => el && arr.current.push(el)];
}

export default function Solution() {
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const [lettersRef, setLettersRef] = useArrayRef();

  gsap.registerPlugin(ScrollTrigger);

  /* ---------------- timeline (NO border animation) ---------------- */
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const container = triggerRef.current!;
      const cards = gsap.utils.toArray<HTMLDivElement>(`.${styles.card}`);

      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: `+=${window.innerHeight * (1 + cards.length)}`,
          scrub: true,
          pin: true,
        },
      });

      /* headline reveal */
      lettersRef.current.forEach((ltr, i) =>
        tl.to(ltr, { color: "#FF8F00", duration: 0.25 }, i * 0.02)
      );

      /* icon fade / slide-up only (border stays unchanged) */
      cards.forEach((card) => {
        const icon = card.querySelector(`.${styles.icon}`);
        tl.to(
          icon,
          { autoAlpha: 1, y: 0, duration: 0.35, ease: "power1.out" },
          "+=0.25" // small pause after previous step
        );
      });
    }, triggerRef);

    return () => ctx.revert();
  }, [lettersRef]);

  /* ---------------- render ---------------- */
  const text =
    "That's why we create custom e-commerce experiences that solve these exact challenges:";

  const data = [
    { id: 1, title: "Slow Page Loading Times", icon: SlowLoading },
    { id: 2, title: "Bad Mobile Phone Experience", icon: BadMobile },
    { id: 3, title: "Complicated Checkout Process", icon: BadCheckout },
    { id: 4, title: "Low Search Engine Visibility", icon: BadVisibility },
  ];

  return (
    <div className={styles.container} ref={triggerRef}>
      <LayoutWrapper>
        <div className={styles.top}>
          <h2 className={styles.heading}>
            {text.split("").map((c, i) => (
              <span key={i} className={styles.revealText} ref={setLettersRef}>
                {c}
              </span>
            ))}
          </h2>
        </div>

        <div className={styles.bottom}>
          {data.map(({ id, title, icon: Icon }) => (
            <div key={id} className={styles.card}>
              <h4 className={styles.title}>{title}</h4>
              <Icon className={styles.icon} />
            </div>
          ))}
        </div>
      </LayoutWrapper>
    </div>
  );
}
