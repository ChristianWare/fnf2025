/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import styles from "./Hero.module.css";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import LayoutWrapper from "../LayoutWrapper";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../Button/Button";
import SectionIntro from "../SectionIntro/SectionIntro";

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
    // overlay fade
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

    // generic text‑flip animator
    const animateText = (
      element: HTMLElement,
      config: {
        type: "words" | "lines";
        ignore?: string;
      }
    ) => {
      // make sure it's visible before we split it
      gsap.set(element, { visibility: "visible" });

      // split into lines or words
      const split = new SplitType(element, {
        types: config.type,
        ...(config.ignore && { children: config.ignore }),
        lineClass: styles.line,
      });
      const targets = config.type === "words" ? split.words : split.lines;

      // START STATE – flip down
      gsap.set(targets, {
        rotationX: 90,
        transformOrigin: "bottom center",
        opacity: 0,
      });

      // END STATE – flip up
      gsap.to(targets, {
        rotationX: 0,
        opacity: 1,
        duration: 3,
        stagger: 0.075,
        ease: "power4.out",
        delay: 0.25,
      });

      // cleanup
      return () => split.revert();
    };

    // apply to each ref
    const animations = [
      { ref: refs.heading, config: { type: "lines" as const } },
      { ref: refs.copy, config: { type: "lines" as const } },
      { ref: refs.servicesTitle, config: { type: "lines" as const } },
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
      if ((config as any).isList) {
        const items = gsap.utils.toArray<HTMLLIElement>(
          ref.current.querySelectorAll("li")
        );
        return items.map((li) => animateText(li, config));
      }
      return animateText(ref.current, config);
    });

    return () =>
      animations.forEach((anim) =>
        Array.isArray(anim) ? anim.forEach((fn) => fn?.()) : anim?.()
      );
  });

  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.overlay} ref={refs.overlay}></div>
        <div className={styles.content}>
          <div className={styles.left}>
            <SectionIntro
              title='Web Development Agency'
              color='black'
              dotColor='blackDot'
            />
            <div className={styles.headingClip}>
              <h1 ref={refs.heading} className={styles.heading}>
                Blazing fast <br /> online stores & <br /> Booking Platforms
              </h1>
            </div>
            <p className={styles.copy}>
              We build blazing‑fast, conversion‑focused e‑commerce sites crafted
              for growth‑minded brands.
            </p>
            <div className={styles.btnContainer}>
              <Button
                text='Book a free call'
                btnType='primary'
                href='/contact'
                marquee={true}
              />
              <Button
                text='Veiw Services'
                btnType='normal'
                href='/services'
                showChevron={true}
              />
            </div>
            <br />
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
