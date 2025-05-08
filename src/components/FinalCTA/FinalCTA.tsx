"use client";

import styles from "./FinalCTA.module.css";
import LayoutWrapper from "../LayoutWrapper";
import Logo from "../Logo/Logo";
import Modal from "../Modal/Modal";
import { InlineWidget } from "react-calendly";
import ContactForm from "../ContactForm/ContactForm";
import { useState } from "react";

type ModalKind = "calendly" | "contact" | null;

export default function FinalCTA() {
  /* which modal is open? (null = none) */
  const [open, setOpen] = useState<ModalKind>(null);

  /* convenience helper */
  const closeModal = () => setOpen(null);

  return (
    <section className={styles.container}>
      {/* ─── heading & logo ─────────────────────────── */}
      <div className={styles.top}>
        <Logo />
        <h2 className={styles.heading}>
          Ready to <br />
          improve your
          <br />
          online store ? <br />
        </h2>
      </div>

      {/* ─── call‑to‑action tiles ───────────────────── */}
      <div className={styles.bottom}>
        {/* left: Calendly */}
        <div className={styles.left}>
          <LayoutWrapper>
            <div
              className={styles.leftContent}
              onClick={() => setOpen("calendly")}
            >
              <h2 className={styles.headingii}>Book an intro call</h2>
              <p className={styles.copy}>
                Let&apos;s transform the way work works. Book an intro to see
                our demo in action.
              </p>
            </div>
          </LayoutWrapper>
        </div>

        {/* right: Contact form */}
        <div className={styles.right}>
          <LayoutWrapper>
            <div
              className={styles.rightContent}
              onClick={() => setOpen("contact")}
            >
              <h2 className={styles.headingii}>Contact us today</h2>
              <p className={styles.copy}>
                Let&apos;s transform the way work works. Book an intro to see
                our demo in action.
              </p>
            </div>
          </LayoutWrapper>
        </div>
      </div>

      {/* ─── modals ─────────────────────────────────── */}
      <Modal isOpen={open === "calendly"} onClose={closeModal}>
        <div className={styles.modalContent}>
          <h3 className={styles.modalHeading}>Book an Intro Call</h3>
          <div className={styles.iframeWrapper}>
            <InlineWidget
              url='https://calendly.com/fontsandfooters/discovery-call'
              styles={{ height: "700px" }}
            />
          </div>
        </div>
      </Modal>

      <Modal isOpen={open === "contact"} onClose={closeModal}>
        <div className={styles.modalContent}>
          <h3 className={styles.modalHeading}>COntact us</h3>
          <ContactForm border='noBorder' />
        </div>
      </Modal>
    </section>
  );
}
