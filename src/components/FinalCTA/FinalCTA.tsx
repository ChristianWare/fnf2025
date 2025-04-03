"use client";

import styles from "./FinalCTA.module.css";
import LayoutWrapper from "../LayoutWrapper";
import ShuffleHero from "../ShuffleHero/ShuffleHero";
import Logo from "../Logo/Logo";

export default function FinalCTA() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <Logo />
          {/* <p className={styles.copy}>
            Let&apos;s discuss how we can help your business grow with a custom
            e-commerce solution that meets your unique needs.
          </p> */}
          <h2 className={styles.heading}>
            We Build <br />
            E-Commerce
            <br />
            Websites <br />
          </h2>
          <ShuffleHero />
        </div>
      </LayoutWrapper>
    </section>
  );
}
