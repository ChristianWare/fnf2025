"use client";

import styles from "./PortfolioPageIntro.module.css";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitType from "split-type";
import LayoutWrapper from "@/components/LayoutWrapper";
import Thunder from "../../../../../public/icons/lightning.svg";
import Rentals from "../../../../../public/icons/rentals.svg";
import Bee from "../../../../../public/icons/bee2.svg";
import Headphones from "../../../../../public/icons/headphones.svg";
import Link from "next/link";

export default function PortfolioPageIntro() {
  const refs = {
    heading: useRef<HTMLHeadingElement>(null),
    copy: useRef<HTMLParagraphElement>(null),
  };

  useGSAP(() => {
    const animateText = (el: HTMLElement | null, type: "words" | "lines") => {
      if (!el) return;
      gsap.set(el, { visibility: "visible" });

      const split = new SplitType(el, {
        types: type,
        lineClass: styles.line, // style below
      });

      const targets = type === "words" ? split.words : split.lines;

      // ▶ start bottom‑left & transparent
      gsap.set(targets, { y: 200, x: -200, opacity: 0 });

      // ▶ travel to natural spot, fade in
      gsap.to(targets, {
        y: 0,
        x: 0,
        opacity: 1,
        duration: 2.5,
        stagger: 0.075,
        ease: "power4.out",
        delay: 0.25,
      });

      return () => split.revert();
    };

    // run on mount
    const cleanups = [
      animateText(refs.heading.current, "words"),
      animateText(refs.copy.current, "lines"),
    ];

    // tidy on unmount
    return () => cleanups.forEach((c) => c && c());
  });

  const data = [
    {
      id: 1,
      title: "Thundertrails",
      icon: Thunder,
      href: "#thundertrails",
    },
    {
      id: 2,
      title: "Chuxly",
      icon: Headphones,
      href: "#chuxly",
    },
    {
      id: 3,
      title: "Golden Drips",
      icon: Bee,
      href: "#goldendrips",
    },
    {
      id: 4,
      title: "Elite Retreat Rentals",
      icon: Rentals,
      href: "#retreat",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((i) => (i + 1) % data.length);
    }, 5000);
    return () => clearInterval(id);
  }, [data.length]);

  const progressTl = useRef<gsap.core.Tween | null>(null);

  
  useEffect(() => {
    progressTl.current?.kill();
    progressTl.current = null;
    gsap.set(`.${styles.progress}`, { scaleX: 0 });
    progressTl.current = gsap.fromTo(
      `.${styles.card}[data-idx="${activeIndex}"] .${styles.progress}`,
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 5,
        ease: "none",
        transformOrigin: "left",
      }
    );

    return () => {
      progressTl.current?.kill();
    };
  }, [activeIndex]);

  const ActiveIcon = data[activeIndex].icon;

  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.left}>
              <h1 ref={refs.heading} className={styles.heading}>
                Our work speaks for itself
              </h1>
            </div>
            <div className={styles.right}>
              <p ref={refs.copy} className={styles.copy}>
                Explore our portfolio of successful e-commerce projects across
                various industries and business models.{" "}
              </p>
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.bottomLeft}>
              {data.map((x, index) => (
                <Link
                  href={x.href}
                  key={x.id}
                  className={styles.card}
                  data-idx={index}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                >
                  <h2
                    className={`${styles.title} ${
                      activeIndex === index ? styles.active : ""
                    }`}
                  >
                    {x.title}
                  </h2>
                  <span className={styles.progress} />
                </Link>
              ))}
            </div>
            <div className={styles.bottomRight}>
              <ActiveIcon className={styles.icon} />
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
