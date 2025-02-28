"use client";

import LayoutWrapper from "../LayoutWrapper";
import styles from "./ServiceDetails.module.css";
import Button from "@/components/Button/Button";

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
      "Build modern and responsive websites using Next.js, and React. Proficient in designing and implementing custom solutions tailored to client needs, with a focus on delivering high-performance and SEO-friendly web experiences.",
  },
  {
    title: "Business Websites",
    company: "KNI",
    description:
      "Helped to build and maintain the following websites: https://aspiriant.com/, https://www.bolt.com/, https://www.rippling.com/",
  },
  {
    title: "Booking Platforms",
    company: "Joyus App",
    description:
      "2 month contract to help migrate the front end from Angular and Nest.js to Next.js. Worked with backend developers to integrate their api to the front end.",
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
      "Maintained current company income share agreement platform with the JavaScript, Node, React, and Python tech stack. Company went out of business.",
  },
  {
    title: "Website Redesign",
    company: "Fandem",
    description:
      "Helped to build the following NFT based websites: probablynothing.io, thebattlebunnies.io/, photosynthesis.io/",
  },
  {
    title: "Resume",
    company: "",
    description: "",
    btn: "Download My Resume",
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
              <h4 className={styles.company}>{x.company}</h4>
              <p className={styles.desc}>{x.description}</p>
              {x.btn && (
                <div className={styles.btnContainer}>
                  <Button
                    btnType='primary'
                    text={x.btn}
                    href='/Chris_Ware_Resume_2024.pdf'
                    target='_blank'
                    download={true}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </LayoutWrapper>
    </div>
  );
}
