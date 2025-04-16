"use client";

import styles from "./Solutionii.module.css";
import Img1 from "../../../public/images/integration.jpg";
import { useState } from "react";
import Image from "next/image";
import SectionIntro from "../SectionIntro/SectionIntro";
import { motion, AnimatePresence } from "framer-motion";
import LayoutWrapper from "../LayoutWrapper";

const data = [
  {
    id: 1,
    title: "A. Home Page",
    desc: "Engage your audience with visually stunning designs that reflect your brand and captivate customers.",
    src: Img1,
  },
  {
    id: 2,
    title: "B. Cart Modal",
    desc: "Leverage insights to optimize your store for better user experiences and higher conversions.",
    src: Img1,
  },
  {
    id: 3,
    title: "C. About Page",
    desc: "Guide visitors effortlessly from discovery to checkout with a streamlined shopping experience.",
    src: Img1,
  },
  {
    id: 4,
    title: "D. FAQ's",
    desc: "Stay ahead with fast, secure, and scalable solutions tailored to your e-commerce needs.",
    src: Img1,
  },
  {
    id: 5,
    title: "E. Shop Page",
    desc: "Create a memorable connection with your audience by showcasing what makes your brand unique.",
    src: Img1,
  },
  {
    id: 6,
    title: "F. Footer",
    desc: "Drive results with strategies designed to turn casual visitors into loyal customers.",
    src: Img1,
  },
];

export default function Solutionii() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.rightBottom}>
              {data.map((item, index) => (
                <div
                  key={item.id}
                  className={
                    activeIndex === index
                      ? `${styles.card} ${styles.active}`
                      : styles.card
                  }
                  onClick={() => setActiveIndex(index)}
                >
                  <h3 className={styles.title}>{item.title}</h3>
                  <p className={styles.desc}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.rightTop}>
              <div className={styles.sectionHeadingContainer}>
                <SectionIntro
                  title='Projects'
                  color='black'
                  dotColor='blackDot'
                />
              </div>
              <h2 className={styles.heading}>
                Featured
                <br />
                Case Study
              </h2>
              <p className={styles.copy}>
                You&apos;ve worked hard to create something unique—let&apos;s
                showcase it with impactful design that highlights the value you
                offer.
              </p>
            
            </div>
            <AnimatePresence mode='wait'>
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className={styles.imgContainer}
              >
                <Image
                  src={data[activeIndex].src}
                  alt=''
                  fill
                  className={styles.img}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
