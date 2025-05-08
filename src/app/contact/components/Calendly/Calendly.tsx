"use client";

import { InlineWidget } from "react-calendly";
import styles from "./Calendly.module.css";
import LayoutWrapper from "@/components/LayoutWrapper";

const Calendly = () => {
  return (
    <section className={styles.container} id='schedule'>
      <LayoutWrapper>
        <div className={styles.calBox}>
          <div className={styles.left}>
            <h2 className={styles.heading}>Book an intro call</h2>
          </div>
          <div className={styles.right}>
            <div className={styles.iframeWrapper}>
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
    </section>
  );
};

export default Calendly;
