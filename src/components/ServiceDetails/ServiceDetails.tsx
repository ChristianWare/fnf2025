"use client";

import LayoutWrapper from "../LayoutWrapper";
import styles from "./ServiceDetails.module.css";

const data = [
  {
    title: "Custom e-commerce development",
    company: "Self",
    description:
      "How do you give the world’s safest car seat a priceless personality?",
  },
  {
    title: "Platform migration & integration",
    company: "KNI",
    description:
      "How do you give the world’s safest car seat a priceless personality?",
  },
  {
    title: "Responsive design optimization",
    company: "Joyus App",
    description:
      "How do you give the world’s safest car seat a priceless personality?",
  },
  {
    icon: "",
    title: "",
    description: "",
  },
  {
    title: "Payment gateway setup",
    company: "Mentorworks",
    description:
      "How do you give the world’s safest car seat a priceless personality?",
  },
  {
    title: "Analytics & conversion rate optimization",
    company: "Fandem",
    description:
      "How do you give the world’s safest car seat a priceless personality?",
  },
  {
    title: "Ongoing support & maintenance",
    company: "",
    description:
      "How do you give the world’s safest car seat a priceless personality?",
  },
];

export default function ServiceDetails() {
  return (
    <div className={styles.container}>
      <LayoutWrapper>
        <div className={styles.bottom}>
          {data.map((x, index) => (
            <div className={styles.card} key={index}>
              {x.icon && <div className={styles.iconContainer}>{x.icon}</div>}
              <h3 className={styles.title}>{x.title}</h3>
              <p className={styles.desc}>{x.description}</p>
            </div>
          ))}
        </div>
      </LayoutWrapper>
    </div>
  );
}
