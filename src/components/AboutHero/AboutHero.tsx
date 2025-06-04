"use client";

import styles from "./AboutHero.module.css";
import LayoutWrapper from "../LayoutWrapper";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AboutUs from "../AboutUs/AboutUs";
// import Circle from "../Circle/Circle";

gsap.registerPlugin(ScrollTrigger);

export default function AboutHero(): JSX.Element {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <AboutUs />
        {/* <Circle /> */}
      </LayoutWrapper>
    </section>
  );
}
