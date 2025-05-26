"use client";

import styles from "./Hero.module.css";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import LayoutWrapper from "../LayoutWrapper";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../Button/Button";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const refs = {
    heading: useRef<HTMLHeadingElement>(null),
    copy: useRef<HTMLParagraphElement>(null),
    servicesTitle: useRef<HTMLParagraphElement>(null),
    servicesContainer: useRef<HTMLUListElement>(null),
    overlay: useRef<HTMLDivElement>(null),
  };

  useGSAP(() => {
    // Overlay animation
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

    const animateText = (
      element: HTMLElement,
      config: {
        type: "words" | "lines";
        ignore?: string;
      }
    ) => {
      gsap.set(element, { visibility: "visible" });

      const split = new SplitType(element, {
        types: config.type,
        ...(config.ignore && { children: config.ignore }),
        lineClass: styles.line,
      });

      const targets = config.type === "words" ? split.words : split.lines;

      // START STATE – only vertical offset
      gsap.set(targets, {
        y: 200, // from 200px below
        opacity: 0, // fully transparent
      });

      // END STATE – original place & fully opaque
      gsap.to(targets, {
        y: 0,
        opacity: 1,
        duration: 1.5,
        stagger: 0.075,
        ease: "power4.out",
        delay: 0.25,
      });

      return () => split.revert();
    };
    

    // Animate all text elements
    const animations = [
      {
        ref: refs.heading,
        config: { type: "lines" as const },
      },
      {
        ref: refs.copy,
        config: { type: "lines" as const },
      },
      {
        ref: refs.servicesTitle,
        config: { type: "lines" as const },
      },
      {
        ref: refs.servicesContainer,
        config: {
          type: "lines" as const,
          ignore: `.${styles.blackDot}`,
          isList: true,
        },
      },
    ].map(({ ref, config }) => {
      if (!ref.current) return null;

      if (config.isList) {
        const listItems = gsap.utils.toArray<HTMLLIElement>(
          ref.current.querySelectorAll("li")
        );

        return listItems.map((li) => animateText(li, config));
      }

      return animateText(ref.current, config);
    });

    // Cleanup
    return () =>
      animations.forEach((animation) => {
        if (Array.isArray(animation)) {
          animation.forEach((a) => a?.());
        } else {
          animation?.();
        }
      });
  });

  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.overlay} ref={refs.overlay}></div>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.headingClip}>
              <h1 ref={refs.heading} className={styles.heading}>
                Blazing fast <br /> online stores & <br /> Booking Platforms
              </h1>
            </div>
            <p className={styles.copy}>
              Blazing‑fast, conversion‑focused e‑commerce sites crafted for
              growth‑minded brands.
            </p>
            <div className={styles.btnContainer}>
              <Button text='Start a Project' btnType='black' href='/contact' />
            </div>
            <br />
            {/* <ShuffleHero /> */}
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
