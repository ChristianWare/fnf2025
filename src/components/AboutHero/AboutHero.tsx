"use client";

import styles from "./AboutHero.module.css";
import LayoutWrapper from "../LayoutWrapper";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeading2 from "../SectionHeading2/SectionHeading2";
import AboutUs from "../AboutUs/AboutUs";
// import ServiceDetails from "../ServiceDetails/ServiceDetails";

gsap.registerPlugin(ScrollTrigger);

export default function AboutHero(): JSX.Element {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.top}>
          <SectionHeading2 title='2. About Us' />
        </div>
        <AboutUs />
        {/* <HomePageSolutions /> */}
        {/* <ServiceDetails /> */}
      </LayoutWrapper>
    </section>
  );
}
