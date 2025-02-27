"use client";

import styles from "./ServiceDetails.module.css";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Button from "@/components/Button/Button";

const services = [
  {
    id: "A",
    name: "E-commerce Stores",
    description:
    "How do you give the world’s safest car seat a priceless personality?How do you give the world’s safest car seat a priceless personality?How do you give the world’s safest car seat a priceless personality?",
  },
  {
    id: "B",
    name: "Business Websites",
    description:
      "How do you give the world’s safest car seat a priceless personality?How do you give the world’s safest car seat a priceless personality?How do you give the world’s safest car seat a priceless personality?",
  },
  {
    id: "C",
    name: "Booking Platforms",
    description:
      "How do you give the world’s safest car seat a priceless personality?How do you give the world’s safest car seat a priceless personality?How do you give the world’s safest car seat a priceless personality?",
  },
  {
    id: "D",
    name: "Landing Pages",
    description:
      "How do you give the world’s safest car seat a priceless personality?How do you give the world’s safest car seat a priceless personality?How do you give the world’s safest car seat a priceless personality?",
  },
];

export default function ServiceDetails() {
  return (
    <div className={styles.container}>
      <HorizontalScrollCarousel />
    </div>
  );
}

function HorizontalScrollCarousel() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-50%"]);

  return (
    <>
      <section ref={targetRef} className={styles.horizontalScrollSection}>
        <div className={styles.stickyContainer}>
          <motion.div style={{ x }} className={styles.cardsRow}>
            {services.map((service) => (
              <Card key={service.id} service={service} />
            ))}
          </motion.div>
        </div>
      </section>
      <div className={styles.btnContainer}>
        <Button btnType='primary' text='See All Services' href='/' />
      </div>
    </>
  );
}

function Card({ service }: { service: (typeof services)[number] }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardTop}>
        <span className={styles.id}>{service.id}: </span>
        <h3 className={styles.cardTitle}>{service.name}</h3>
        <p className={styles.cardDescription}>{service.description}</p>
      </div>
      <div className={styles.cardBottom}>More Details →</div>
    </div>
  );
}
