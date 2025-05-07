"use client";

import styles from "./FinalCTA.module.css";
import LayoutWrapper from "../LayoutWrapper";
import Logo from "../Logo/Logo";

export default function FinalCTA() {
  return (
    <section className={styles.container}>
      <div className={styles.top}>
        <Logo />
        <h2 className={styles.heading}>
          Ready to <br />
          improve your
          <br />
          online store ? <br />
        </h2>
      </div>
      <div className={styles.bottom}>
        <div className={styles.left}>
          <LayoutWrapper>
            <div className={styles.leftContent}>
              <h2 className={styles.headingii}>Book an intro call</h2>
              <p className={styles.copy}>
                Let&apos;s transform the way work works. Book an intro to see
                our demo in action.
              </p>
            </div>
          </LayoutWrapper>
        </div>
        <div className={styles.right}>
          <LayoutWrapper>
            <div className={styles.rightContent}>
              <h2 className={styles.headingii}>Contact us today </h2>
              <p className={styles.copy}>
                Let&apos;s transform the way work works. Book an intro to see
                our demo in action.
              </p>
            </div>
          </LayoutWrapper>
        </div>
      </div>
    </section>
  );
}
