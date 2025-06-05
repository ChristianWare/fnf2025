"use client";

// import SectionIntro from "../SectionIntro/SectionIntro";
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

  return (
    <Link
      onClick={() => {
        router.push("/", {
          onTransitionReady: slideInOut,
        });
      }}
      href={"/"}
      className={`${styles.logo} ${styles[size]} ${styles[color]}`}
    >
      Fonts & Footers
    </Link>
  );
};
export default Logo;
