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
          <h2 className={styles.heading}>
            We build <br />
            blazing fast
            <br />
            online stores <br />
          </h2>
          <ShuffleHero />
        </div>
      </LayoutWrapper>
    </section>
  );
}
