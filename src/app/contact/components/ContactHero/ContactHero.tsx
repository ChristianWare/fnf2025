'use client'

import LayoutWrapper from "@/components/LayoutWrapper";
import styles from "./ContactHero.module.css";
import ContactForm from "@/components/ContactForm/ContactForm";
import { InlineWidget } from "react-calendly";
import SectionIntro from "@/components/SectionIntro/SectionIntro";

export default function ContactHero() {
  return (
    <div className={styles.container}>
      <LayoutWrapper>
        <div className={styles.top}>
          <h1 className={styles.heading}>Get Started</h1>
          <p className={styles.copy}>
            Ready to finally see how work, should work? We have the business
            apps you depend on, the support you need, and the AI you’ve been
            waiting for—all in one solution. Be one of the first to experience
            our product and gain a competitive edge.
          </p>
        </div>
        <div className={styles.content}>
          <div className={styles.left}>
            <ContactForm />
          </div>
          <div className={styles.right}>
            <div className={styles.iframeWrapper}>
              <div className={styles.sectionIntroContainer}>
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
