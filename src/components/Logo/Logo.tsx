"use client";

import SectionIntro from "../SectionIntro/SectionIntro";
import styles from "./Logo.module.css";
import Link from "next/link";
import { useTransitionRouter } from "next-view-transitions";

interface Props {
  size?: string;
  color?: string;
}

const Logo = ({ size = "", color = "" }: Props) => {
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
  return (
    <Link
      onClick={() => {
        router.push("/", {
          onTransitionReady: slideInOut,
        });
      }}
      href={'/'}
      className={`${styles.logo} ${styles[size]} ${styles[color]}`}
    >
      {/* Fonts & Footers */}
      <SectionIntro title='FONTS & FOOTERS' color='black' dotColor='blackDot' />
    </Link>
  );
};
export default Logo;
