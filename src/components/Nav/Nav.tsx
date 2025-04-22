"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useTransitionRouter } from "next-view-transitions";
import { useSession, signOut } from "next-auth/react";
import styles from "./Nav.module.css";
import Logo from "../Logo/Logo";
import User from "../../../public/icons/user.svg";

const navItems = [
  { text: "About", href: "/about" },
  { text: "Services", href: "/services" },
  { text: "Pricing", href: "/pricing" },
  { text: "Works", href: "/portfolio" },
  // { text: "Journal", href: "/blog" },
  { text: "Start a Project", href: "/contact" },
];

export default function Nav() {
  const router = useTransitionRouter();
  const { data: session } = useSession();

  /* ---------------- view‑transition helper ---------------------- */
  function slideInOut() {
    document.documentElement.animate(
      [
        { opacity: 1, transform: "translateY(0)" },
        { opacity: 0.2, transform: "translateY(-35%)" },
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
        { clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" },
        { clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)" },
      ],
      {
        duration: 1500,
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  }

  /* ---------------- state & refs -------------------------------- */
  const [isOpen, setIsOpen] = useState(false);
  const [navWhite, setNavWhite] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);

  /* ---------------- menu toggle --------------------------------- */
  const toggleHamburger = () => setIsOpen((v) => !v);
  const closeHamburger = () => setIsOpen(false);

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

          <ul
            className={styles.navItems}
            onClick={(e) => e.stopPropagation()} /* keep hamburger stable */
          >
            {navItems.map((item) => (
              <li
                key={item.href}
                className={styles.navItem}
                onClick={closeHamburger}
              >
                <Link
                  href={item.href}
                  onClick={() =>
                    router.push(item.href, { onTransitionReady: slideInOut })
                  }
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ------------- avatar / auth dropdown ------------- */}
        <div
          className={styles.avatarWrapper}
          onClick={(e) => {
            e.stopPropagation();
            setDropdownOpen((v) => !v);
          }}
          tabIndex={0}
        >
          <User width={32} height={32} className={styles.avatar} />

          {dropdownOpen && (
            <menu
              className={styles.avatarMenu}
              onClick={(e) => e.stopPropagation()}
            >
              {session ? (
                <>
                  <li>
                    <Link
                      href='/account'
                      onClick={() => setDropdownOpen(false)}
                    >
                      Account settings
                    </Link>
                  </li>
                  {session.user.role === "ADMIN" && (
                    <li>
                      <Link
                        href='/admin/dashboard'
                        onClick={() => setDropdownOpen(false)}
                      >
                        Admin dashboard
                      </Link>
                    </li>
                  )}
                  <li>
                    <button
                      type='button'
                      className={styles.logoutBtn}
                      onClick={() => signOut({ callbackUrl: "/auth/login" })}
                    >
                      Sign out
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link
                      href='/auth/login'
                      onClick={() => setDropdownOpen(false)}
                    >
                      Sign in
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/auth/register'
                      onClick={() => setDropdownOpen(false)}
                    >
                      Register
                    </Link>
                  </li>
                </>
              )}
            </menu>
          )}
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
