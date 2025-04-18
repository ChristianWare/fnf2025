"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./Nav.module.css";
import Logo from "../Logo/Logo";
import { useTransitionRouter } from "next-view-transitions";
// import Button from "../Button/Button";

const navItems = [
  { text: "About", href: "/about" },
  { text: "Services", href: "/services" },
  { text: "Pricing", href: "/pricing" },
  { text: "Works", href: "/portfolio" },
  { text: "Journal", href: "/blog" },
  { text: "Start a Project", href: "/contact" },
];

export default function Nav() {
  const router = useTransitionRouter();

  function slideInOut() {
    document.documentElement.animate(
      [
        {
          opacity: 1,
          transform: "translateY(0)",
        },
        {
          opacity: 0.2,
          transform: "translateY(-35%)",
        },
      ],
      {
        duration: 1500,
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-old(root)",
      }
    );

    document.documentElement.animate(
      [
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        },
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        },
      ],
      {
        duration: 1500,
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  }

  const [isOpen, setIsOpen] = useState(false);
  const [navWhite, setNavWhite] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const navRef = useRef<HTMLElement | null>(null);

  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const darkSections = document.querySelectorAll(".dark-section");

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      let anyDarkVisible = false;
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          anyDarkVisible = true;
        }
      });
      setNavWhite(anyDarkVisible);
    };

    const observerOptions = {
      root: null,
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    darkSections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and scrolled more than 100px
        setShowNav(false);
      } else {
        // Scrolling up
        setShowNav(true);
      }

      lastScrollY = currentScrollY;
    };

    // Throttle scroll events for performance
    let ticking = false;
    const optimizedHandleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", optimizedHandleScroll);

    return () => {
      window.removeEventListener("scroll", optimizedHandleScroll);
    };
  }, []);

  return (
    <header
      className={`${styles.header} ${showNav ? styles.show : styles.hide} ${
        navWhite ? styles.white : ""
      }`}
      ref={navRef}
    >
      <div className={styles.logoContainerMobile}>
        <Logo />
      </div>
      <nav className={styles.navbar}>
        <div
          className={
            isOpen === false
              ? styles.navMenu
              : `${styles.navMenu} ${styles.active}`
          }
          onClick={openMenu}
        >
          <div className={styles.logoContainer}>
            <Logo />
          </div>
          <ul className={styles.navItems}>
            {navItems.map((navItem, index) => (
              <li
                key={index}
                className={`${styles.navItem}`}
                onClick={() => setIsOpen(false)}
              >
                <Link
                  onClick={() => {
                    router.push(navItem.href, {
                      onTransitionReady: slideInOut,
                    });
                  }}
                  href={navItem.href}
                >
                  {navItem.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div
          className={
            isOpen === false
              ? styles.hamburger
              : `${styles.hamburger} ${styles.active}`
          }
          onClick={openMenu}
        >
          <span className={styles.whiteBar}></span>
          <span className={styles.whiteBar}></span>
          <span className={styles.whiteBar}></span>
        </div>
      </nav>
    </header>
  );
}
