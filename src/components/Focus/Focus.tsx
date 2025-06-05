"use client";

import styles from "./Focus.module.css";
import Circle from "../Circle/Circle";
import LayoutWrapper from "../LayoutWrapper";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Focus() {
  const copyRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    if (!copyRef.current) return;

    gsap.set(copyRef.current, { visibility: "visible" });

    const split = new SplitType(copyRef.current, {
      types: "lines",
      lineClass: styles.line,
    });

    /* scroll-scrubbed timeline */
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: copyRef.current, // watch the paragraph
        start: "top 80%", // when its top hits 90% of viewport
        end: "top 40%", // …animate until it reaches 40% (≈50 vh span)
        scrub: 3,
        // markers: true,
      },
    });

    tl.from(split.lines, {
      y: 200,
      x: -200,
      opacity: 0,
      stagger: 0.075,
      ease: "power4.out",
    });

    return () => {
      split.revert();
      tl.kill();
    };
  });

  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <p ref={copyRef} className={styles.copy}>
          Fonts & Footers exists exclusively for small to mid-sized businesses
          that sell physical products online. Whether you move five SKUs or five
          thousand, we concentrate on headless Shopify and custom Next.js
          storefronts that scale with you. By niching down, we stay razor-sharp
          on e-commerce trends, checkout psychology, and back-office
          integrations that matter most to merchants—not generic “all-in-one”
          web services.
        </p>
        <div className={styles.content}>
          <div className={styles.left}></div>
          <div className={styles.right}>
            {/* <div className={styles.imgContainer}>
              <ParallaxImage
                src={Img1}
                alt='Fonts & Footers office'
                title='Fonts & Footers'
              />
            </div> */}
            <Circle />
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
