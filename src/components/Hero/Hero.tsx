"use client";

import styles from "./Hero.module.css";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import LayoutWrapper from "../LayoutWrapper";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../Button/Button";
import Image from "next/image";
import Img1 from "../../../public/images/heroiii.jpeg";

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
    { id: 1, name: "B2B Stores" },
    { id: 2, name: "B2C Stores" },
    { id: 3, name: "Multivendor Marketplaces" },
  ];

  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.overlay} ref={refs.overlay}></div>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.headingClip}>
              <h1 ref={refs.heading} className={styles.heading}>
                We Build <br />
                E-Commerce
                <br />
                Websites <br />
              </h1>
            </div>
            <div>
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
            <div className={styles.btnContainer}>
              <Button text='Get Started' btnType='secondary' href='/' />
              <Button text='View our Work' btnType='primary' href='/' />
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.imgContainer}>
              <div className={styles.imgOverlay} />
              <Image src={Img1} fill alt='' title='' className={styles.img} />
              <p className={styles.copy} ref={refs.copy}>
                Fonts & Footers is a specialized e-commerce web development
                agency crafting custom, high-converting online stores for
                businesses of all sizes.
              </p>
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
