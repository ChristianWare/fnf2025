"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useTransitionRouter } from "next-view-transitions";
import styles from "./Nav.module.css";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";

const navItems = [
  { text: "About", href: "/about" },
  { text: "Works", href: "/portfolio" },
  { text: "Pricing", href: "/pricing" },
  { text: "Blog", href: "/blog" },
  { text: "Contact", href: "/contact" },
];

export default function Nav() {
  const router = useTransitionRouter();

  function slideInOut() {
    const duration = 1500;
    const easing = "cubic-bezier(0.87, 0, 0.13, 1)";

    document.documentElement.animate(
      [
        { opacity: 1, transform: "translate(0, 0)" },
        { opacity: 0.2, transform: "translate(35%, -35%)" },
      ],
      {
        duration,
        easing,
        fill: "forwards",
        pseudoElement: "::view-transition-old(root)",
      }
    );

    document.documentElement.animate(
      [
        { opacity: 0, transform: "translate(-35%, 35%)" },
        { opacity: 1, transform: "translate(0, 0)" },
      ],
      {
        duration,
        easing,
        fill: "forwards",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  }

  const [navWhite, setNavWhite] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const navRef = useRef<HTMLElement | null>(null);

  // const toggleHamburger = () => setIsOpen((v) => !v);

  useEffect(() => {
    const sections = document.querySelectorAll(".dark-section");
    const obs = new IntersectionObserver(
      (entries) => setNavWhite(entries.some((e) => e.isIntersecting)),
      { threshold: 0.5 }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setShowNav(!(y > lastY && y > 100));
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      ref={navRef}
      className={`${styles.header} ${showNav ? styles.show : styles.hide} ${
        navWhite ? styles.white : ""
      }`}
    >
      <nav className={styles.navbar}>
        <div className={styles.logoContainer}>
          <Logo />
        </div>
        <div className={styles.navItems} onClick={(e) => e.stopPropagation()}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => {
                router.push(item.href, { onTransitionReady: slideInOut });
              }}
              className={styles.navItem}
            >
              {item.text}
            </Link>
          ))}
        </div>
        <div className={styles.btnContainer}>
          <Button
            text='Get Started'
            btnType='primary'
            href='/contact'
            marquee={true}
          />
        </div>
      </nav>
    </header>
  );
}
