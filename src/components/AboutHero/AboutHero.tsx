"use client";

import styles from "./AboutHero.module.css";
import LayoutWrapper from "../LayoutWrapper";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Img1 from "../../../public/images/about.jpeg";
// import ParallaxImage from "../ParallaxImage/ParallaxImage";
import SectionHeading2 from "../SectionHeading2/SectionHeading2";
import Mission from "../Mission/Mission";
import HomePageSolutions from "../HomePageSolutions/HomePageSolutions";
import ServiceDetails from "../ServiceDetails/ServiceDetails";

gsap.registerPlugin(ScrollTrigger);

export default function AboutHero(): JSX.Element {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.top}>
          <SectionHeading2 title='2: Our Specialties' />
        </div>
        {/* <div className={styles.content}>
          <div className={styles.left}>
            <h2 className={styles.headingii}>
              Fonts & Footers is a specialized e-commerce development agency
              helping businesses of all sizes establish and optimize their
              online presence.
            </h2>
            <div className={styles.copyContainer}>
              <p className={styles.copy}>
                With a focus on user experience, conversion optimization, and
                technical excellence, we create online stores that not only look
                great but also drive real business results.
              </p>
            </div>
          </div>
          <div className={styles.right}>
            <ParallaxImage src={Img1} alt='' title='About Us' />
          </div>
        </div> */}
        <HomePageSolutions />
        <ServiceDetails />
        <Mission />
      </LayoutWrapper>
    </section>
  );
}
