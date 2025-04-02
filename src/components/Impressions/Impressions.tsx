"use client";

import styles from "./Impressions.module.css";
import LayoutWrapper from "../LayoutWrapper";
import SectionHeading from "../SectionHeading/SectionHeading";

import Img1 from "../../../public/images/ecomm.jpeg";
import ParallaxImage from "../ParallaxImage/ParallaxImage";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../Button/Button";
import Online from "../../../public/icons/online.svg";

gsap.registerPlugin(CustomEase, ScrollTrigger);

export default function Impressions() {
  const imgContainerRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!imgContainerRef.current || !imageWrapperRef.current) return;

    // Create custom easing curve
    CustomEase.create(
      "hop",
      "M0,0 C0.29,0 0.348,0.05 0.422,0.134 0.494,0.217 0.484,0.355 0.5,0.5 0.518,0.662 0.515,0.793 0.596,0.876 0.701,0.983 0.72,0.987 1,1 "
    );

    // Set initial states
    gsap.set(imageWrapperRef.current, { scale: 2 });
    gsap.set(imgContainerRef.current, {
      clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
    });

    // Create animation timeline with scroll trigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: imgContainerRef.current,
        start: "top center", // When top of element hits center of viewport
        end: "bottom center",
        toggleActions: "play none none reverse", // Play on enter, reverse on leave
        markers: false, // Set to false to remove debug markers
      },
    });

    tl.to(imgContainerRef.current, {
      clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
      duration: 1,
      ease: "hop",
    }).to(
      imageWrapperRef.current,
      {
        scale: 1,
        duration: 1,
        ease: "power3.inOut",
      },
      0.15
    );

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <SectionHeading
          number='1'
          title='Your online store is more than just a website'
        />
        <div className={styles.content}>
          <div className={styles.left}>
            <h3 className={styles.heading}>
              In today&apos;s digital marketplace,{" "}
              <span className={styles.span}>
                having an e-commerce site that simply &ldquo;works&rdquo;
                isn&apos;t enough.
              </span>
              <br />
              <br />
              Your online store needs to tell your{" "}
              <span className={styles.span}>brand story,</span> provide an
              exceptional <span className={styles.span}>user experience,</span>{" "}
              and convert visitors into{" "}
              <span className={styles.span}> loyal customers.</span>
            </h3>
            <div ref={imgContainerRef} className={styles.imgContainer}>
              <ParallaxImage src={Img1} alt='' title='Your Online Store' />
            </div>
          </div>
          <div className={styles.right}>
            <p className={styles.copy}>
              Many businesses struggle with outdated platforms, poor mobile
              experiences, or complicated checkout processes that cost them
              sales every day.
              <br />
              <br />
              At Fonts & Footers, we understand the unique challenges of
              e-commerce and build solutions that drive real business growth.
            </p>
            <Online className={styles.icon} />
            <div className={styles.btnContainer}>
              <Button
                btnType='secondary'
                text='Learn how we can help'
                href='/'
              />
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
