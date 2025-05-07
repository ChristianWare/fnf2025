/* eslint-disable react-hooks/exhaustive-deps */
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

/* ───────── helper types ───────────────────────────────────────── */
interface CardItem {
  id: number;
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  href: string;
}

export default function PortfolioPageIntro() {
  /* ───────── intro text refs ─────────────────────────────────── */
  const refs = {
    heading: useRef<HTMLHeadingElement>(null),
    copy: useRef<HTMLParagraphElement>(null),
  };

  /* ───────── SplitType (unchanged) ───────────────────────────── */
  useGSAP(() => {
    const animate = (el: HTMLElement | null, type: "words" | "lines") => {
      if (!el) return;
      gsap.set(el, { visibility: "visible" });

      const split = new SplitType(el, { types: type, lineClass: styles.line });
      const parts = type === "words" ? split.words : split.lines;

      gsap.set(parts, { y: 200, x: -200, opacity: 0 });
      gsap.to(parts, {
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

    const clean = [
      animate(refs.heading.current, "words"),
      animate(refs.copy.current, "lines"),
    ];
    return () => clean.forEach((c) => c && c());
  });

  /* ───────── card data ───────────────────────────────────────── */
  const data: CardItem[] = [
    { id: 1, title: "Thundertrails", icon: Thunder, href: "#thundertrails" },
    { id: 2, title: "Chuxly", icon: Headphones, href: "#chuxly" },
    { id: 3, title: "Golden Drips", icon: Bee, href: "#goldendrips" },
    { id: 4, title: "Elite Retreat Rentals", icon: Rentals, href: "#retreat" },
  ];

  /* ───────── autoplay state & refs ───────────────────────────── */
  const [activeIndex, setActiveIndex] = useState(0);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null); // drives index change
  const progressTl = useRef<gsap.core.Tween | null>(null); // fills pink bar
  const pausedRef = useRef(false); // true while hovered
  const remainingRef = useRef(5000); // ms left when paused
  const startedTsRef = useRef<number>(Date.now()); // timestamp when cycle began

  /* helper: schedule the next change after `delay` ms */
  const scheduleNext = (delay = 5000) => {
    timeoutRef.current = setTimeout(() => {
      setActiveIndex((i) => (i + 1) % data.length);
    }, delay);
    startedTsRef.current = Date.now();
  };

  /* ───────── start first cycle on mount ─────────────────────── */
  useEffect(() => {
    scheduleNext();
    return () => clearTimeout(timeoutRef.current!);
  }, []);

  /* ───────── when activeIndex changes ───────────────────────── */
  useEffect(() => {
    /* reset / restart bar */
    progressTl.current?.kill();
    gsap.set(`.${styles.progress}`, { scaleX: 0 });

    progressTl.current = gsap.fromTo(
      `.${styles.card}[data-idx="${activeIndex}"] .${styles.progress}`,
      { scaleX: 0 },
      { scaleX: 1, duration: 5, ease: "none", transformOrigin: "left" }
    );

    /* if we're paused, freeze bar immediately */
    if (pausedRef.current) {
      progressTl.current.pause();
    }

    /* reschedule next change (unless paused) */
    clearTimeout(timeoutRef.current!);
    if (!pausedRef.current) scheduleNext();
  }, [activeIndex]);

  /* ───────── hover handlers ─────────────────────────────────── */
  const handlePause = () => {
    if (pausedRef.current) return;
    pausedRef.current = true;

    /* how much time is left in this 5‑s cycle? */
    const elapsed = Date.now() - startedTsRef.current;
    remainingRef.current = Math.max(5000 - elapsed, 0);

    clearTimeout(timeoutRef.current!);
    progressTl.current?.pause();
  };

  const handleResume = () => {
    if (!pausedRef.current) return;
    pausedRef.current = false;

    progressTl.current?.resume();
    scheduleNext(remainingRef.current);
  };

  /* ───────── icon of the active card ────────────────────────── */
  const ActiveIcon = data[activeIndex].icon;

  /* ───────── render ─────────────────────────────────────────── */
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          {/* ─── intro copy ─────────────────── */}
          <div className={styles.top}>
            <div className={styles.left}>
              <h1 ref={refs.heading} className={styles.heading}>
                Our work speaks for itself
              </h1>
            </div>
            <div className={styles.right}>
              <p ref={refs.copy} className={styles.copy}>
                Explore our portfolio of successful e‑commerce projects across
                various industries and business models.
              </p>
            </div>
          </div>

          {/* ─── cards + icon ───────────────── */}
          <div className={styles.bottom}>
            <div
              className={styles.bottomLeft}
              onMouseEnter={handlePause}
              onMouseLeave={handleResume}
            >
              {data.map((item, idx) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className={styles.card}
                  data-idx={idx}
                  onMouseEnter={() => setActiveIndex(idx)}
                >
                  <h2
                    className={`${styles.title} ${
                      activeIndex === idx ? styles.active : ""
                    }`}
                  >
                    {item.title}
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
