"use client";

import styles from "./AboutHero.module.css";
import LayoutWrapper from "../LayoutWrapper";
import SectionHeading from "../SectionHeading/SectionHeading";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Img1 from '../../../public\/images/about.jpeg'

gsap.registerPlugin(ScrollTrigger);

export default function AboutHero(): JSX.Element {
  // Create a ref for the heading element
  const headingRef = useRef<HTMLHeadingElement | null>(null);

  useGSAP(() => {
    // Text animation for heading only
    const animateHeading = (): (() => void) | null => {
      if (!headingRef.current) return null;

      // Set visibility to visible initially
      gsap.set(headingRef.current, { visibility: "visible" });

      // Split the heading text into words
      const split = new SplitType(headingRef.current, {
        types: "words",
        lineClass: styles.line,
      });

      // Set initial position for the words
      gsap.set(split.words || [], {
        y: 400,
        // opacity: 0  // Uncomment if you want opacity animation too
      });

      // Animate words coming up
      gsap.to(split.words || [], {
        y: 0,
        opacity: 1,
        duration: 2,
        stagger: 0.075,
        ease: "power4.out",
        delay: 0.25,
      });

      // Return cleanup function
      return () => split.revert();
    };

    // Run the animation
    const headingAnimation = animateHeading();

    // Cleanup
    return () => {
      headingAnimation?.();
    };
  });

  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.top}>
          <h1 ref={headingRef} className={styles.heading}>
            We build e-commerce experiences that drive growth
          </h1>
        </div>
              <SectionHeading
                number='1'
                title='Bridging design and functionality'
              />
        <div className={styles.content}>
          <div className={styles.left}>
            <h2 className={styles.headingii}>
              Fonts & Footers is a specialized e-commerce development agency
              helping businesses of all sizes establish and optimize their
              online presence.
            </h2>
            <br />
            <br />
            <p className={styles.copy}>
              With a focus on user experience, conversion optimization, and
              technical excellence, we create online stores that not only look
              great but also drive real business results.
            </p>
          </div>
          <div className={styles.right}>
            <div className={styles.imgContainer}>
              <Image src={Img1} alt='' title='' fill className={styles.img} />
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
