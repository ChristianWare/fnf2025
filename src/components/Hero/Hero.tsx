"use client";

import styles from "./Hero.module.css";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import LayoutWrapper from "../LayoutWrapper";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

      gsap.set(targets, {
        y: 400,
        //  opacity: 0
      });
      gsap.to(targets, {
        y: 0,
        opacity: 1,
        duration: 2,
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
        config: { type: "words" as const },
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

  const services = [
    { id: 1, name: "Multi-page Business Websites" },
    { id: 2, name: "E-commerce Stores" },
    { id: 3, name: "Landing Pages" },
  ];

  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.overlay} ref={refs.overlay}></div>
        <video preload='auto' autoPlay muted loop className={styles.video}>
          <source src='./videos/glass.mp4' />
        </video>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.headingClip}>
              <h1 ref={refs.heading} className={styles.heading}>
                We Build <br />
                Innovative
                <br />
                Websites <br />
              </h1>
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.copyContainer}>
              <p className={styles.copy} ref={refs.copy}>
                Since 2022, we&apos;ve been crafting digital experiences that
                matter.
              </p>
            </div>
          </div>

          <div className={styles.bottom2}>
            <p className={styles.servicesTitle} ref={refs.servicesTitle}>
              What we Build:
            </p>
            <ul
              className={styles.servicesContainer}
              ref={refs.servicesContainer}
            >
              {services.map((x) => (
                <li className={styles.service} key={x.id}>
                  {x.name}
                  <span className={styles.blackDot} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
