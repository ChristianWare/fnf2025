"use client";

import styles from "./ServiceDetails.module.css";
import LayoutWrapper from "../LayoutWrapper";
import Rotate from "../../../public/icons/rotate.svg";
import Development from "../../../public/icons/development.svg";
import Conversion from "../../../public/icons/target.svg";
import Cart from "../../../public/icons/cart.svg";
import Login from "../../../public/icons/login.svg";

const data = [
  {
    title: "Custom e-commerce development",
    icon: <Development className={styles.icon} />,
  },
  {
    title: "Platform migration & integration",
    icon: <Login className={styles.icon} />,
  },
  {
    title: "Responsive design optimization",
    icon: <Rotate className={styles.icon} />,
  },
  {
    icon: "",
    title: "",
  },
  {
    title: "Payment gateway setup",
    icon: <Cart className={styles.icon} />,
  },
  {
    title: "Conversion rate optimization",
    icon: <Conversion className={styles.icon} />,
  },
  {
    title: "Ongoing support & maintenance",
    icon: <Rotate className={styles.icon} />,
  },
];

export default function ServiceDetails() {
  return (
    <div className={styles.container}>
      <LayoutWrapper>
        <div className={styles.bottom}>
          {data.map((x, index) => (
            <div className={styles.card} key={index}>
              <h3 className={styles.title}>{x.title}</h3>
              {x.icon}
            </div>
          ))}
        </div>
      </LayoutWrapper>
    </div>
  );
}
