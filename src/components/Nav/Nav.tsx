"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useTransitionRouter } from "next-view-transitions";
import styles from "./Nav.module.css";
import Logo from "../Logo/Logo";
// import User from "../../../public/icons/user.svg";

const navItems = [
  { text: "About", href: "/about" },
  { text: "Works", href: "/portfolio" },
  { text: "Pricing", href: "/pricing" },
  { text: "Blog", href: "/blog" },
  { text: "Contact", href: "/contact" },
];

export default function Nav() {
  const router = useTransitionRouter();

  /* ---------------- view‑transition helper ---------------------- */
  function slideInOut() {
    const duration = 1500;
    const easing = "cubic-bezier(0.87, 0, 0.13, 1)";

    /* 1️⃣  Outgoing view ‑‑ fade + drift up‑right  */
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

    /* 2️⃣  Incoming view ‑‑ start down‑left, glide to centre while fading in */
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

  /* ---------------- state & refs -------------------------------- */
  const [isOpen, setIsOpen] = useState(false);
  const [navWhite, setNavWhite] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const navRef = useRef<HTMLElement | null>(null);

  /* ---------------- menu toggle --------------------------------- */
  const toggleHamburger = () => setIsOpen((v) => !v);
  // const closeHamburger = () => setIsOpen(false);

  /* ---------------- dark‑section observer ----------------------- */
  useEffect(() => {
    const sections = document.querySelectorAll(".dark-section");
    const obs = new IntersectionObserver(
      (entries) => setNavWhite(entries.some((e) => e.isIntersecting)),
      { threshold: 0.5 }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  /* ---------------- hide on scroll down ------------------------- */
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

  /* ---------------- render -------------------------------------- */
  return (
    <header
      ref={navRef}
      className={`${styles.header} ${showNav ? styles.show : styles.hide} ${
        navWhite ? styles.white : ""
      }`}
    >
      {/* mobile logo */}
      <div className={styles.logoContainerMobile}>
        <Logo />
      </div>

      <nav className={styles.navbar}>
        {/* ------------- mobile / desktop nav links ------------- */}
        <div
          className={
            !isOpen ? styles.navMenu : `${styles.navMenu} ${styles.active}`
          }
        >
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
                  setIsOpen(false);
                }}
                className={styles.navItem}
              >
                {item.text}
              </Link>
            ))}
          </div>
        </div>

        {/* ------------- hamburger button ------------- */}
        <div
          className={
            !isOpen ? styles.hamburger : `${styles.hamburger} ${styles.active}`
          }
          onClick={toggleHamburger}
        >
          <span className={styles.whiteBar}></span>
          <span className={styles.whiteBar}></span>
          <span className={styles.whiteBar}></span>
        </div>
      </nav>
    </header>
  );
}
