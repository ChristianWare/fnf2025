"use client";

import styles from "./ContactHero.module.css";
import LayoutWrapper from "@/components/LayoutWrapper";
import ContactForm from "@/components/ContactForm/ContactForm";
import { InlineWidget } from "react-calendly";
import SectionIntro from "@/components/SectionIntro/SectionIntro";

export default function ContactHero() {
  return (
    <div className={styles.container}>
      <LayoutWrapper>
        <div className={styles.top}>
          <h2 className={styles.heading}>
            Ready to improve your online store ?
          </h2>{" "}
          <p className={styles.copy}>
            Ready to finally see how work, should work? We have the business
            apps you depend on, the support you need, and the AI you’ve been
            waiting for—all in one solution. Be one of the first to experience
            our product and gain a competitive edge.
          </p>
        </div>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.sectionIntroContainer1}>
              <SectionIntro
                title='Send a Message'
                color='black'
                dotColor='blackDot'
              />
            </div>
            <ContactForm />
          </div>
          <div className={styles.right}>
            <div className={styles.iframeWrapper}>
              <div className={styles.sectionIntroContainer2}>
                <SectionIntro
                  title='Book a call'
                  color='black'
                  dotColor='blackDot'
                />
              </div>
              <InlineWidget
                url='https://calendly.com/fontsandfooters/discovery-call'
                styles={{
                  height: "700px",
                }}
              />
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </div>
  );
}
