"use client";

import LayoutWrapper from "../LayoutWrapper";
import styles from "./ServiceDetails.module.css";

// const services = [
//   {
//     id: "A",
//     name: "E-commerce Stores",
//     description:
//     "How do you give the world’s safest car seat a priceless personality?How do you give the world’s safest car seat a priceless personality?How do you give the world’s safest car seat a priceless personality?",
//   },
//   {
//     id: "B",
//     name: "Business Websites",
//     description:
//       "How do you give the world’s safest car seat a priceless personality?How do you give the world’s safest car seat a priceless personality?How do you give the world’s safest car seat a priceless personality?",
//   },
//   {
//     id: "C",
//     name: "Booking Platforms",
//     description:
//       "How do you give the world’s safest car seat a priceless personality?How do you give the world’s safest car seat a priceless personality?How do you give the world’s safest car seat a priceless personality?",
//   },
//   {
//     id: "D",
//     name: "Landing Pages",
//     description:
//       "How do you give the world’s safest car seat a priceless personality?How do you give the world’s safest car seat a priceless personality?How do you give the world’s safest car seat a priceless personality?",
//   },
// ];

const data = [
  {
    title: "E-commerce Stores",
    company: "Self",
    description:
      "How do you give the world’s safest car seat a priceless personality?",
  },
  {
    title: "Business Websites",
    company: "KNI",
    description:
      "How do you give the world’s safest car seat a priceless personality?",
  },
  {
    title: "Booking Platforms",
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
    title: "Landing Pages",
    company: "Mentorworks",
    description:
      "How do you give the world’s safest car seat a priceless personality?",
  },
  {
    title: "Blogs",
    company: "Fandem",
    description:
      "How do you give the world’s safest car seat a priceless personality?",
  },
  {
    title: "Marketplaces",
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
              {/* <h4 className={styles.company}>{x.company}</h4> */}
              <p className={styles.desc}>{x.description}</p>
            </div>
          ))}
        </div>
      </LayoutWrapper>
    </div>
  );
}
