"use client";

import LayoutWrapper from "../LayoutWrapper";
import styles from "./ServiceDetails.module.css";
import SectionIntro from "../SectionIntro/SectionIntro";
import Button from "../Button/Button";

const data = [
  {
    title: "Custom e-commerce development",
    description:
      "How do you give the world’s safest car seat a priceless personality?",
  },
  {
    title: "Platform migration & integration",
    description:
      "How do you give the world’s safest car seat a priceless personality?",
  },
  {
    title: "Responsive design optimization",
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
    description:
      "How do you give the world’s safest car seat a priceless personality?",
  },
  {
    title: "Conversion rate optimization",
    description:
      "How do you give the world’s safest car seat a priceless personality?",
  },
  {
    title: "Ongoing support & maintenance",
    description:
      "How do you give the world’s safest car seat a priceless personality?",
  },
];

export default function ServiceDetails() {
  return (
    <div className={styles.container}>
      <LayoutWrapper>
        <div className={styles.top}>
          <SectionIntro
            title='End-to-end ecommerce solitions'
            color='black'
            dotColor='blackDot'
          />
        </div>
        <div className={styles.bottom}>
          {data.map((x, index) => (
            <div className={styles.card} key={index}>
              <h3 className={styles.title}>{x.title}</h3>
              <p className={styles.desc}>{x.description}</p>
            </div>
          ))}
        </div>
        <div className={styles.btnContainer}>
          <Button
            text='See All Services'
            btnType='secondary'
            href='/services'
          />
        </div>
      </LayoutWrapper>
    </div>
  );
}
