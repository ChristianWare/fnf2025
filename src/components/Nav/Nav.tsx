"use client";

import { useState, useEffect, useCallback } from "react";
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

// helper keeps the “568 px” number in one place
const isMobile = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(max-width: 568px)").matches;

export default function Nav() {
  const router = useTransitionRouter();

  /* ---------------- view-transition helper ---------------------- */
  const slideInOut = useCallback(() => {
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
  }, []);

  const [showNav, setShowNav] = useState(true);

  /* ---------- hide/show only when NOT on mobile ---------------- */
  useEffect(() => {
    // if we start on mobile, nav should stay visible
    if (isMobile()) {
      setShowNav(true);
      return; // ⟵ skip adding scroll listener
    }

    let lastY = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      setShowNav(!(y > lastY && y > 100));
      lastY = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    // also watch for a resize that crosses the 568 px breakpoint
    const onResize = () => {
      if (isMobile()) {
        // switched to mobile: clean up and lock nav visible
        window.removeEventListener("scroll", onScroll);
        setShowNav(true);
      }
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <header
      className={`${styles.header} ${showNav ? styles.show : styles.hide}`}
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
              onClick={() =>
                router.push(item.href, { onTransitionReady: slideInOut })
              }
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
            marquee
          />
        </div>
      </nav>
    </header>
  );
}
