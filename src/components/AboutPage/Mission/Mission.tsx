"use client";

import LayoutWrapper from "@/components/LayoutWrapper";
import styles from "./Mission.module.css";

const mission = [
  {
    feature: "Performance‑First Engineering",
    desc: "Every storefront we ship targets < 1 s LCP and 90 + Lighthouse scores, so speed never costs you a sale.",
  },
  {
    feature: "Human‑Centric UX",
    desc: "Mobile‑first layouts, thumb‑reach controls, and friction‑free checkout flows turn casual scrollers into loyal buyers.",
  },
  {
    feature: "Seamless System Integration",
    desc: "Shopify, ERP, CRM, and fulfillment data flow in one loop—zero re‑keying, fewer stockouts, and happier ops teams.",
  },
  {
    feature: "Data‑Driven Growth",
    desc: "Post‑launch analytics → A/B → deploy cycles compound small wins into sustained revenue growth.",
  },
];

export default function Mission() {
  return (
    <div className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <h2 className={styles.topHeading}>Our Vision</h2>

          <div className={styles.top}>
            <p className={styles.heading}>
              Fonts &amp; Footers exists to deliver{" "}
              <strong>
                blazing‑fast, conversion‑focused e‑commerce experiences
              </strong>
              . We blend pixel‑perfect design with rock‑solid engineering so
              brands can scale without worrying about speed, SEO, or system
              chaos. Below are the four pillars that guide every project we take
              on:
            </p>
          </div>

          <div className={styles.bottom}>
            {mission.map((item, index) => (
              <div key={index} className={styles.box}>
                <span className={styles.index}>Pillar {index + 1}</span>
                <h4 className={styles.feature}>{item.feature}</h4>
                <p className={styles.desc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </LayoutWrapper>
    </div>
  );
}
