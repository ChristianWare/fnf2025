"use client";

import styles from "./OtherThings.module.css";
import LayoutWrapper from "../LayoutWrapper";
import Img1 from "../../../public/images/ecomm.jpeg";
import Button from "../Button/Button";
import SectionHeading2 from "../SectionHeading2/SectionHeading2";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import ParallaxImage from "../ParallaxImage/ParallaxImage";

export default function OtherThings() {
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
        <div className={styles.content}>
          <div className={styles.top}>
            <SectionHeading2 title='Fonts & Footers' />
          </div>
          <div className={styles.bottom}>
            <div className={styles.left}>
              <ParallaxImage
                src={Img1}
                alt=''
                title='Your E-commerce Specialists'
              />
            </div>
            <div className={styles.right} ref={triggerRef}>
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
              <div className={styles.rightBottom}>
                <p className={styles.info}>
                  Let&apos;s discuss how we can help your business grow with a
                  custom e-commerce solution that meets your unique needs.
                </p>
                <div className={styles.btnContainer}>
                  <Button btnType='secondary' text='Work With Us' href='/' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
