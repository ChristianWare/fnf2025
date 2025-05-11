"use client";

import styles from "./FinalCTA.module.css";
import LayoutWrapper from "../LayoutWrapper";
import Logo from "../Logo/Logo";
import Modal from "../Modal/Modal";
import { InlineWidget } from "react-calendly";
import ContactForm from "../ContactForm/ContactForm";
import { useState } from "react";
import Arrow from "../../../public/icons/arrow2.svg";

type ModalKind = "calendly" | "contact" | null;

export default function FinalCTA() {
  const [open, setOpen] = useState<ModalKind>(null);

  const closeModal = () => setOpen(null);

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
            <div
              className={styles.leftContent}
              onClick={() => setOpen("calendly")}
            >
              <h2 className={styles.headingii}>Book an intro call</h2>
              <Arrow className={styles.arrow} />
              <p className={styles.copy}>
                Let&apos;s transform the way work works. Book an intro to see
                our demo in action.
              </p>
            </div>
          </LayoutWrapper>
        </div>
        <div className={styles.right}>
          <LayoutWrapper>
            <div
              className={styles.rightContent}
              onClick={() => setOpen("contact")}
            >
              <h2 className={styles.headingii}>Contact us today</h2>
              <Arrow className={styles.arrow} />
              <p className={styles.copy}>
                Let&apos;s transform the way work works. Book an intro to see
                our demo in action.
              </p>
            </div>
          </LayoutWrapper>
        </div>
      </div>

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
          <h3 className={styles.modalHeading}>Contact us</h3>
          <div className={styles.iframeWrapper}>
            <ContactForm border='noBorder' />
          </div>
        </div>
      </Modal>
    </section>
  );
}
