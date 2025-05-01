"use client";

import styles from "./OtherThings.module.css";
import ContactForm from "../ContactForm/ContactForm";

export default function OtherThings() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.bottom}>
          <div className={styles.left}>
            <ContactForm />
          </div>
          
        </div>
      </div>
    </section>
  );
}
